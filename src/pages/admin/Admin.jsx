import {useEffect, useState} from 'react';
import axios from 'axios';
import './Admin.css';
import {useAuth} from "../../authentication/AuthContext.jsx";
import Logout from "../../components/logoutbutton/Logout.jsx";


const Admin = () => {
    const [users, setUsers] = useState([]);
    const {token} = useAuth();

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users/getall', {
                headers: {
                    Authorization: token}
                });
        setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    const deleteUser = async (Id) => {
        if (!token) {
            console.error('No token found');
            return
        }

        try {
            await axios.delete(`http://localhost:8080/users/delete/${Id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
            }
        });

        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== Id));
        console.log('User succesfully deleted');
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div className="admin-container">
            <h2 className="admin-title">Admin Dashboard & User Management</h2>

           <div className="button-container">
               <Logout />
           </div>

            <table className="admin-table visible">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>Action</th>
                </tr>
                </thead>
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
            </table>
        </div>
    )
}

export default Admin;