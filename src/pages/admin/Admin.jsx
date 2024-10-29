import {useState} from 'react';
import axios from 'axios';
import './Admin.css';
import Button from '../../components/button/Button.jsx'

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users/getall');
        setUsers(response.data);
        setIsTableVisible(true);
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Admin Dashboard & User Management</h2>

           <div className="button-container">
               <Button text="Get All Users" onClick={fetchUsers} type="black" size="large" />
           </div>
            <table className="admin-table">
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
                        <button className="delete-button">Delete User</button>
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