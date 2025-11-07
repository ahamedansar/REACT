import React from 'react'
import { useContext } from 'react'
import { UserApiContext } from './UserApiContext'
import { FaUserSlash } from "react-icons/fa6";

const UserList = () => {
    const {users,loading} = useContext(UserApiContext);

    if(loading) return <p>Loading</p>
  return (
    <div>
      <h2> <FaUserSlash /> Users:</h2>
    </div>
  )
}

export default UserList
