import React from 'react';


const Passenger = (props) => {
  const { formData, setFormData, nextStep } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{marginLeft:'-250px', width: '1900%', height:'40rem', opacity: '0.7', backgroundColor: 'rgba(0, 123, 255, 0.5)' }}>
    <div className='bg-white p-3 rounded' style={{ width: '70%' }}>
      <h2>Passenger Profile</h2>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />

      {/* <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className='form-control rounded-0'
      />
      <br /> */}
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className='form-control rounded-0 w-100 '
      />
      <br />
      <button onClick={handleNext}
      className='btn btn-success w-100 rounded-0'>Next</button>
    </div>
    </div>
  );
};

export default Passenger;