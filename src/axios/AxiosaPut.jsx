import axios from 'axios';
import React, { useState } from 'react'

const AxiosaPut = () => {
    const [userId, setUserId] = useState('');
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [message, setNewMessage] = useState("");


    const handleUpdate = async (e) => {
        e.preventDefault();

        const updateData = {
            name: newName,
            email: newEmail
        }

        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updateData);
            console.log(response.data);
            setNewMessage("user update successfully")
        } catch (error) {
            console.log(error) ;
            setNewMessage("Error updating user")
        }
    }


    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <input type="text"
                    placeholder='User Id To Update'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <br /><br />


                <input type="text"
                    placeholder='New Name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <br /><br />


                <input type="text"
                    placeholder='New Email'
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <br /><br />
                <button type='submit'>Update</button>

            </form>
        <p>{message}</p>


        </div>
    )
}

export default AxiosaPut;
