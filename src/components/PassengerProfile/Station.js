import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const Station = () => {
  const [values, setValues] = useState({
    park_name: '',
    city: '',
    state: '',
    destination: '',
    number_of_passengers: '',
    bus_capacity: '',
    date: ''
  })
  const navigate = useNavigate()
// const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
  
     
  const submit = async() => {
    const res = await      
        axios.post('http://localhost:3001/station', values 
            // park_name: values.park_name,
            // city: values.city,
            // state: values.state,
            // destination: values.destination,
            // number_of_passengers: values.number_of_passengers,
            // bus_capacity: values.bus_capacity,
            // date: values.date
      )
        .then(result => {
         navigate('/home')
          })
        .catch(err => console.log(err));
        if(res){
          console.log('success')
        }
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        submit();
      }

 
  return (
    <div
    style={{
      background: 'rgba(0, 123, 255, 0.5)', // Background color with opacity
      width: '200%', // Full width
      minHeight: '95vh', // Minimum height to cover the entire viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div className="bg-white p-3 rounded" style={{ width: '70%' }}>
      <h2>Station Information</h2>
      <label htmlFor="park_name">Park Name</label>
      <input
        type="text"
        id="park_name"
        name="park_name"
        placeholder='Enter park name'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder='Enter city'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        placeholder='Enter State'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="destination">Destination</label>
      <input
        type="text"
        id="destination"
        name="destination"
        placeholder='Enter destination'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="number_of_passengers">Number of Passengers</label>
      <input
        type="text"
        id="number_of_passengers"
        name="number_of_passengers"
        placeholder='Enter number of passengers'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="bus_capacity">Bus Capacity</label>
      <input
        type="text"
        id="bus_capacity"
        name="bus_capacity"
        placeholder='Enter bus capacity'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder='Enter date'
        onChange={handleInput}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <button type='submit' className='btn btn-success w-100 rounded-0'>Submit</button>
    </div>
     </div>
  )
}

export default Station;
