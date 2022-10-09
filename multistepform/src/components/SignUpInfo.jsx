import React from 'react'

function SignUpInfo() {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Enter your Email"
      />
      <input
        type="text"
        placeholder="Enter Password"
      />
      <input
        type="text"
        placeholder="Enter Confirm Password"
      />
      <button>Signup</button>
    </div>
  );
}

export default SignUpInfo