import { useState } from 'react'

const PassengerProfile = () => {

      const [firstname, setFirstName] = useState('');
      const [lastname, setLastNmae] = useState('');
      const [phonenumber, setPhoneNumber] = useState('');
      const [mobile, setMobile] = useState('');
      const [fullname, setFullName] = useState('');
      const [address, setAddress] = useState('');
      const [nextOfKinAddress, setNextOfKinAddress] = useState('');
    
      const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastNmae(event.target.value);
      };
    
      const handlePPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };
    
      const handleMobileChange = (event) => {
        setMobile(event.target.value);
      };

      const handleFullnameChange = (event) => {
        setFullName(event.target.value);
      };

      const handleAddressChange = (event) => {
        setAddress(event.target.value);
      };

      const handleNextOfKinAddressChange = (event) => {
        setNextOfKinAddress(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here
      };


  return (
    <div className="passenger_page">
    <h2>Passenger Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter first name"
            value={firstname}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter lastname"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone number:</label>
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            placeholder="Enter phone number"
            value={phonenumber}
            onChange={handlePPhoneNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Address:</label>
          <input
            type="text"
            className="form-control"
            id="Address"
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <h2>Next of kin information</h2>
        <div className="form-group">
          <label htmlFor="text">Full Nmae:</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter full name"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">mobile number:</label>
          <input
            type="number"
            className="form-control"
            id="mobile number"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={handleMobileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Address:</label>
          <input
            type="text"
            className="form-control"
            id="Address"
            placeholder="Enter address"
            value={nextOfKinAddress}
            onChange={handleNextOfKinAddressChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PassengerProfile