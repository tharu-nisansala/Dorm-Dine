// components/SignUpForm.js
import React from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'; 

function SignUp() {
    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form>
                <label>Name</label><br/>
                <input type="text" placeholder="Type your username" /><br/>
                
                <label>Address</label><br/>
                    <input type="text" placeholder="Type your address" /><br/>
                
                <label>Telephone</label><br/>
                    <input type="text" placeholder="Type your telephone number" /><br/>
                
                <label>University</label><br/>
                    <input type="text" placeholder="Select your university" /><br/>
                
                <div className="social-signup">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faGoogle} className="social-icon2" />
                </div >
                
                <button className='sign' type="submit">Sign Up</button>
               
            </form>
        </div>
    );
}

export default SignUp;
