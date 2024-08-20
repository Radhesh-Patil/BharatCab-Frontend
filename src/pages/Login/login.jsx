import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

import { setToken } from '../../service/SessionStorageService';

function LoginPage() {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail,
          userPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        navigate('/home');
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed due to an error");
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <MDBContainer fluid className="p-3 my-5" style={{ backgroundColor: '#ebedee' }}>
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src={require('./login.gif')} className="img-fluid" alt="Car GIF" />
        </MDBCol>

        <MDBCol col='4' md='6' className="d-flex justify-content-center align-items-center">
          <div>
            {/* Title Section */}
            <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
              BharatCab Your Travel Partner
            </h2>

            {/* Controlled Inputs */}
            <MDBInput
              wrapperClass='mb-4'
              label='E-mail'
              id='formControlLg'
              type='email'
              size="lg"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='formControlLg'
              type='password'
              size="lg"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="#!">Forgot password?</a>
            </div>

            {/* Sign In and Sign Up Buttons */}
            <div className="d-flex justify-content-between">
              <MDBBtn className="w-50 me-2" size="lg" onClick={handleSignIn}>Sign in</MDBBtn>
              <MDBBtn className="w-50 ms-2" color="success" size="lg" onClick={handleSignUp}>Sign up</MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
