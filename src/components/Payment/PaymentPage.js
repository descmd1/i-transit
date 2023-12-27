import React, { useState } from 'react';
import validator from 'validator';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';

const PaymentPage = () =>{
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focused, setFocused] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!validator.isCreditCard(number)) {
          newErrors.number = 'Invalid credit card number';
        }
        if (!validator.isLength(name, { min: 3 })) {
          newErrors.name = 'Invalid credit card name';
        }
    }

    return(
        <div>
        <Cards
  number={number}
  name={name}
  expiry={expiry}
  cvc={cvc}
  focused={focused}
  placeholders={{ name: 'Full Name' }}
  callback={(type, isValid) => {
    if (type === 'expiry' && !isValid) {
      setErrors({ ...errors, expiry: 'Invalid expiry date' });
    } else {
      setErrors({ ...errors, expiry: null });
    }
  }}
/>
<input
  type="tel"
  name="number"
  placeholder="Card Number"
  value={number}
  onChange={(e) => {
    if (validator.isNumeric(e.target.value)) {
      setNumber(e.target.value);
    }
  }}
  onFocus={(e) => setFocused(e.target.name)}
  onBlur={() => setFocused('')}
/>
<input
  type="text"
  name="name"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  onFocus={(e) => setFocused(e.target.name)}
  onBlur={() => setFocused('')}
/>
<input
  type="tel"
  name="expiry"
  placeholder="MM/YY Expiry"
  value={expiry}
  onChange={(e) => setExpiry(e.target.value)}
  onFocus={(e) => setFocused(e.target.name)}
  onBlur={() => setFocused('')}
/>
<input
  type="tel"
  name="cvc"
  placeholder="CVC"
  value={cvc}
  onChange={(e) => setCvc(e.target.value)}
  onFocus={(e) => setFocused(e.target.name)}
  onBlur={() => setFocused('')}
/>
{errors.expiry && <div>{errors.expiry}</div>}
<button onClick={handleSubmit}>submit</button>
</div>

    );
}
export default PaymentPage;