import { useState} from 'react';
import axios from 'axios';
import './Admin.css';
import Button from '../../components/button/Button.jsx'
import {useAuth} from "../../authentication/AuthContext.jsx";


const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const {token} = useAuth();

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users/getall');
        setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/users/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
            },
        });

        setUsers(users.filter(user => user.id !== id));
        console.log('User succesfully deleted');
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    const toggleTableVisibility = () => {
        if (!isTableVisible && users.length === 0) {
            fetchUsers();
        }
        setIsTableVisible(!isTableVisible);
    }

    return (
        <div className="admin-container">
            <h2 className="admin-title">Admin Dashboard & User Management</h2>

           <div className="button-container">
               <Button text={isTableVisible ? "Hide Users" : "Get All Users"} onClick={toggleTableVisibility} type="black" size="large" />
           </div>

            <table className={`admin-table ${isTableVisible ? "visible" : "hidden"}`}>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                {isTableVisible && (
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{new Date(user.registrationDate).toLocaleDateString()}</td>
                    <td>
                        <button className="delete-button"
                        onClick={() => deleteUser(user.id)}>Delete User</button>
                    </td>
                    </tr>
                ))}
                </tbody>
                )}
            </table>
        </div>
    )
}

export default Admin;