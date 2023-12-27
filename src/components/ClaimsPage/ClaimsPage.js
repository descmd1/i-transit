import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ClaimsPage() {
  const [values, setValues] = useState({
    policy_number: '',
    first_name: '',
    last_name: '',
    date_of_loss: '',
    loss_description: '',
    amount: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   setSubmitting(true);
  //   setSuccess(true);
  //   const res = await
  //   axios.post('http://localhost:3001/station', formData )
  //   .then(result => {
  //     navigate('/home')
  //      })
  //    .catch(err => console.log(err));
  //    if(res){
  //      console.log('success')
  //    }
  //  }
   
  const submit = async() => {
    const res = await      
        axios.post('http://localhost:3001/claims', values
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


  // const handleChange = (event) => {
  //   const { name, values } = event.target;
  //   setValues((prevState) => ({
  //     ...prevState,
  //     [name]: values,
  //   }));
  // };

  const handleChange = (event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 padding'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Submit a Claim</h2>
      {success ? (
        <div className="success-message">
          <p>Your claim has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={submit} className='bg-white p-3 rounded w-100'>
          <label htmlFor="policy_number">Policy Number:</label>
          <input
            type="text"
            id="policy_number"
            name="policy_number"
            // value={data.policy_number}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            // value={formData.first_name}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            // value={formData.last_name}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <label htmlFor="date_of_loss">Date of Loss:</label>
          <input
            type="date"
            id="date_of_loss"
            name="date_of_loss"
            // value={formData.date_of_loss}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <label htmlFor="loss_description">Loss Description:</label>
          <textarea
            id="loss_description"
            name="loss_description"
            // value={formData.loss_description}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            // value={formData.amount}
            onChange={handleChange}
            className='form-control rounded-0 w-100'
          />
          <button type="submit"  className='btn btn-success w-100 rounded-0 mt-2'>
            {/* {submitting ? 'Submitting...' : 'Submit'} */}
            Submit
          </button>
        </form>
      )}
      </div>
    </div>
  );
}

export default ClaimsPage;