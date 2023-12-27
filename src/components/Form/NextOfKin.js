import React from 'react';


const NextOfKin = (props) => {
  const { formData, setFormData, nextStep, prevStep } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{marginLeft:'-50px', width: '170%', height:'40rem', opacity: '0.7', backgroundColor: 'rgba(0, 123, 255, 0.5)' }}>
    <div className='bg-white p-3 rounded' style={{ width: '70%' }}>
      <h2>Next of Kin Information</h2>
      <label htmlFor="nextofkin_name">Full Name</label>
      <input
        type="text"
        id="nextofkin_name"
        name="nextofkin_name"
        value={formData.nextofkin_name}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="nextofkin_phone"
        name="nextofkin_phone"
        value={formData.nextofkin_phone}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="nextofkin_address">Address</label>
      <input
        type="text"
        id="nextofkin_address"
        name="nextofkin_address"
        value={formData.nextofkin_address}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <div className='d-flex flex-row gap-5' style={{justifyContent: 'space-between'}}>
      <button onClick={handlePrev}
      className='btn btn-success w-30 rounded-0'>Back</button>
      <button onClick={handleNext}
      className='btn btn-success w-30 rounded-0'>Next</button>
      </div>
    </div>
     </div>
  );
};

export default NextOfKin;