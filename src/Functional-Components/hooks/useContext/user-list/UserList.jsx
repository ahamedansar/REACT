
import { useContext } from 'react'
import { UserApiContext } from './UserApiContext'
import { GiAbstract035 } from "react-icons/gi";

const UserList = () => {
    const { users, loading } = useContext(UserApiContext);

    if (loading) return <p>Loading</p>
    return (
        <div>
            <h2> <GiAbstract035 /> Users:</h2>
            <ul>
                {users.map(usr => (
                    <li key={usr.id}>
                        {usr.name} - {usr.email} - {usr.username} - {usr.street}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default UserList
