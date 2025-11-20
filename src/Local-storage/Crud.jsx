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
    const [errors, setErrors] = useState({});
    const [isLoded, setIsLoaded] = useState(false);
    //save users to localstorage (whenever user changes. only after initial load)
    useEffect(() => {
        if (isLoded) {//only save after initial load is completed
            localStorage.setItem("users", JSON.stringify(users))


        }

    }, [users, isLoded])

    const handleChange = (e) => {
        const { name, value } = e.target;     //called every time a user types or changes a form field.
        setFormData(prev => ({
            ...prev,                      // uses the spread operator to keep other values unchanged
            [name]: value                //update formData using the input's name as key & the value as the new value
        }))
    }

    const validate = () => {
        const newErrors = {};

        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = "Name is required!";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "Name should only contain alphabets";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        return newErrors;
    }




    return (
        <div className='formnew'>
            <h1>React  -  Crud</h1>

            <form>
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
                {editMode && (
                    <button
                        type='buttton'
                        style={{ marginLeft: '10px' }}>Cancel</button>
                )}


            </form>
        </div>
    )
}

export default Crud
