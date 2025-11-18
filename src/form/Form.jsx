import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; //called every time a user types or changes a form field
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Age
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age)) {
      newErrors.age = "Age must be a number";
    }

    // Password
    if (!formData.password.trim())
      newErrors.password = "Password is required";

    // Confirm password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Gender
    if (!formData.gender) newErrors.gender = "Select gender";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      {/* email */}
      <div>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      {/* age */}
      <div>
        <input
          type="text"
          name="age"
          value={formData.age}
          placeholder="Your Age"
          onChange={handleChange}
          className={errors.age ? "error-input" : ""}
        />
        {errors.age && <p className="error-text">{errors.age}</p>}
      </div>

      {/* password */}
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          className={errors.password ? "error-input" : ""}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>

      {/* confirm password */}
      <div>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
          className={errors.confirmPassword ? "error-input" : ""}
        />
        {errors.confirmPassword && (
          <p className="error-text">{errors.confirmPassword}</p>
        )}
      </div>

      {/* gender */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          male
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          female
        </label>

        {errors.gender && <p className="error-text">{errors.gender}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
