import React from 'react'

function PersonalInfo() {
  return (
    <div className="personal-info-container">
    <input
      type="text"
      placeholder="Enter your First Name"
    />
    <input
      type="text"
      placeholder="Enter your Last Name"
    />
    <input
      type="text"
      placeholder=" Enter your Birth Date"
    />
    <input
      type="date"
    />
    <button>Signup</button>
  </div>
  );
}

export default PersonalInfo