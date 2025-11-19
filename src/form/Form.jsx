import React, { useState } from 'react'
import './form.css'


const Form = () => {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        Password: "",
        confirmpassword: "",
        gender: "",

    })

    const [Errors, setError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;//called every time  a user types or changes form field.

        setFormData(prev => ({
            ...prev,/// use the spred operator to keep other values unchanged

            [name]: value// update formData usig the input name as key &the value as  the new value

        }))
    }
    const validation = () => {
        const newErrors = {};
        const { name, email, age, Password, confirmpassword, gender } = FormData;
    }
    return (

        <form>
            <div>
                <input type="text" name='name' value={FormData.name} placeholder='name' onChange={handleChange} />
            </div>
            {/* email */}
            <div>
                <input type="email" name='email' placeholder='your email' onChange={handleChange} />
            </div>
            {/* age */}
            <div>
                <input type="text" name='age' value={FormData.age} placeholder='your age' onChange={handleChange} />
            </div>

            {/* Password */}

            <div>
                <input type="password" name='Password' value={FormData.Password} placeholder='your password' onChange={handleChange} />
            </div>
            {/*confirm password */}
            <div>
                <input type="password" name='confirmpassword' value={FormData.confirmpassword} placeholder='your password' onChange={handleChange} />
            </div>
            <div>
                {/* male */}
                <label >
                    <input type="radio" name='gender' value='male' checked={FormData.gender === 'male'} placeholder='your password' onChange={handleChange} />
                    Male
                </label>
                {/* female */}
                <label >
                    <input type="radio" name='gender' value='female' checked={FormData.gender === 'female'} placeholder='your password' onChange={handleChange} />
                    Female
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>

    )
}

export default Form