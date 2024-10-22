import React, {useState} from 'react';
import axios from 'axios';
import './Admin.css';
import Button from '../../components/button/Button.jsx'

function Admin() {
    /*const [user, setUser] = useState(null);
    const [showUser, setShowUser] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/admin/users'); // API endpoint aanpassen naar jouw backend
            setUsers(response.data);
            setShowUsers(true);
        } catch (error) {
            console.error('Error fetching users:', error);
            // Hier zou een foutmelding getoond kunnen worden
        }
    };

    const deleteUser = async (email) => {
        try {
            await axios.delete(`/api/users/${email}`); // API endpoint aanpassen naar jouw backend
            const updatedUsers = users.filter(user => user.email !== email);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
            // Hier zou een foutmelding getoond kunnen worden
        }
    };*/

    return (
        <div className="admin-container">
            <h1 className="admin-title">Admin Dashboard</h1>
            <Button onClick="fetchUsers" label="Get All Users" className="get-users-button" type="black" size="big"></Button>

            {showUsers && (
                <div className="user-list">
                    <div className="user-list-header">
                        <span>First Name</span>
                        <span>Last Name</span>
                        <span>Email</span>
                        <span>Registration Date</span>
                        <span>Delete</span>
                    </div>
                    {users.map(user => (
                        <div className="user-list-row" key={user.email}>
                            <span>{user.firstName}</span>
                            <span>{user.lastName}</span>
                            <span>{user.email}</span>
                            <span>{user.registrationDate}</span>
                            <Button onClick={() => deleteUser(user.email)} label="Delete" className="delete-button" type="mint" size="small"></Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Admin;