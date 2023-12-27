import React, { useState } from 'react';
import './PolicySelectionPage.css';

function PolicySelectionPage() {
  const [selectedPolicy, setSelectedPolicy] = useState('');

  const handlePolicySelection = (event) => {
    setSelectedPolicy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle policy selection logic here
  };

  return (
    <div className="policy-selection-page">
      <h2>Choose Your Policy</h2>
      <form onSubmit={handleSubmit} className='policy-form'>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="policyOption"
            id="policyOption1"
            value="option1"
            checked={selectedPolicy === 'option1'}
            onChange={handlePolicySelection}
          />
          <label className="form-check-label" htmlFor="policyOption1">
            Policy Option 1
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="policyOption"
            id="policyOption2"
            value="option2"
            checked={selectedPolicy === 'option2'}
            onChange={handlePolicySelection}
          />
          <label className="form-check-label" htmlFor="policyOption2">
            Policy Option 2
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="policyOption"
            id="policyOption3"
            value="option3"
            checked={selectedPolicy === 'option3'}
            onChange={handlePolicySelection}
          />
          <label className="form-check-label" htmlFor="policyOption3">
            Policy Option 3
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Select Policy
        </button>
      </form>
    </div>
  );
}

export default PolicySelectionPage;