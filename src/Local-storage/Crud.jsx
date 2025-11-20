import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: '',

    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [erros, setErrors] = useState({});
    const [isLoded, setIsLoaded] = useState(false);
    //save users to localstorage (whenever user changes. only after initial load)
    useEffect(() => {
        if(isLoded){//only save after initial load is completed
            localStorage.setItem("users", JSON.stringify(users))


        }

    },[users,isLoded])

     const handleChange = (e) => {
    const { name, value } = e.target;     //called every time a user types or changes a form field.
    setFormData(prev => ({
      ...prev,                      // uses the spread operator to keep other values unchanged
      [name]: value                //update formData using the input's name as key & the value as the new value
    }))
}




    return (
        <div className='formnew'>
            <h1>React  -  Crud</h1>
          
                <form onSubmit={handleSubmit}>
      {/* name */}
      <div>
        <input
          type="text"
          name='name'
          value={formData.name}
          placeholder='Name'
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}> {errors.name}</p>}
      </div>
      {/* email */}
      <div>
        <input
          type="email"
          name='email'
          value={formData.email}
          placeholder='Your Email'
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}> {errors.email}</p>}
      </div>
      {/* age */}
      <div>
        <input
          type="number"
          name='age'
          value={formData.age}
          placeholder='Your age'
          onChange={handleChange} />
        {errors.age && <p style={{ color: 'red' }}> {errors.age}</p>}
      </div>
      <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    )
}

export default Crud
