import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Preview = (props) => {
  const navigate = useNavigate()
  const { formData, prevStep } = props;
  const { onPrevStep } = props;

  const handlePrev = () => {
    prevStep();
  };

  const submit = async() => {
    const res = await      
        axios.post('http://localhost:3001/passengers', {
      firstname:formData.firstname, 
      lastname:formData.lastname,
      phone:formData.phone,
      address:formData.address,
      nextofkin_name:formData.nextofkin_name,
      nextofkin_phone:formData.nextofkin_phone,
      nextofkin_address:formData.nextofkin_address} )
        .then(result => {
        onPrevStep();
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
    <div className='d-flex justify-content-center align-items-center' style={{marginLeft:'-250px', width: '1900%', height:'40rem', opacity: '0.7', backgroundColor: 'rgba(0, 123, 255, 0.5)' }}>
    <div className='bg-white p-3 rounded' style={{ width: '70%' }}>
      <form action='' onSubmit={handleSubmit}>
      <h2 className='mb-3'>Passenger details</h2>
      <p>First Name: {formData.firstname}</p>
      <p>Last Name: {formData.lastname}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address: {formData.address}</p>
      <h2 className='mb-3'>Next of kin details</h2>
      <p>Next of kin Name: {formData.nextofkin_name}</p>
      <p>Next of kin phone number: {formData.nextofkin_phone}</p>
      <p>Next of kin Address: {formData.nextofkin_address}</p>
      <div className='d-flex flex-row gap-5' style={{justifyContent:'space-between'}}>
      <button onClick={handlePrev}
      className='btn btn-success w-30 rounded-0'>Back</button>
      <button type='submit'
      className='btn btn-success w-30 rounded-0'>Submit</button>
      </div>
      </form>
    </div>
    </div>
  );
};

export default Preview;