// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import validation from './LoginValidation'
// import axios from 'axios'

// const Login = () => {
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   })
//   const navigate = useNavigate()
// const [errors, setErrors] = useState({})
//     const handleInput = (event) => {
//       setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
//     }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));
//     if(
//       errors.email === "" &&
//       errors.password === "") {
//         axios.post('http://localhost:3001/login', values)
//         .then(res => {
//           navigate('/passengers')
//           })
//         .catch(err => console.log(err));
//       }

//   }
//   return (
//     <div className='d-flex justify-content-center align-items-center' style={{marginLeft:'-250px', width: '1900%', height:'40rem', opacity: '0.7', backgroundColor: 'rgba(0, 123, 255, 0.5)' }}>
//       <div className='bg-white p-3 rounded' style={{ width: '70%' }}>
//       <h2>Sign In</h2>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         placeholder='Enter Email'
//         onChange={handleInput}
//         className='form-control rounded-0 w-100'
//       />
//       {errors.email && <span className='text-danger'>{errors.email}</span>}
//       <br />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         placeholder='Enter Password'
//         onChange={handleInput}
//         className='form-control rounded-0 w-100 '
//       />
//        {errors.password && <span className='text-danger'>{errors.password}</span>}
//       <br />
//       <button onClick={handleSubmit} className='btn btn-success w-100 rounded-0'>Login</button>
//       <p> Don't have account?</p>
//       <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>
//     </div>
//      </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:3001/login', values)
        .then((res) => {
          navigate('/passengers');
        })
        .catch((err) => console.log(err));
    }
  };

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
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleInput}
          className="form-control rounded-0 w-100"
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleInput}
          className="form-control rounded-0 w-100"
        />
        {errors.password && <span className="text-danger">{errors.password}</span>}
        <br />
        <button onClick={handleSubmit} className="btn btn-success w-100 rounded-0">
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;