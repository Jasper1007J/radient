
import React from 'react';

// SignUp component for users to sign up and get exclusive special deals
const SignUp = () => {
    return (
        <div className="signup-details">
            <h1>Sign up and get exclusive special deals</h1>
            <div className="signup-input">
                <input type="email" className="input" placeholder="Enter your email"/>
                <button className="btn">Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;