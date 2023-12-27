import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation'; 
import axios from 'axios'

const Signup = () => {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.firstname === "" &&
      errors.lastname === "" &&
      errors.email === "" &&
      errors.password === "") {
        axios.post('http://localhost:3001/signup', values)
        .then(res => {
          navigate('/')
          })
        .catch(err => console.log(err));
      }
  }
  return (
    <div
      style={{
        background: 'rgba(0, 123, 255, 0.5)', // Background color with opacity
        width: '200%', // Full width
        minHeight: '80vh', // Minimum height to cover the entire viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-white p-3 rounded" style={{ width: '70%' }}>
      <h2>Sign Up</h2>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder='Enter First name'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
       {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder='Enter Last name'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
       {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder='Enter Email'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
       {errors.email && <span className='text-danger'>{errors.email}</span>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder='Enter Password'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
       {errors.password && <span className='text-danger'>{errors.password}</span>}
      <br />
      <button onClick={handleSubmit} className='btn btn-success w-100 rounded-0'>Signup</button>
      <p> Already have account?</p>
      <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
    </div>
     </div>
  )
}

export default Signup