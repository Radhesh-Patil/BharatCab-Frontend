// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';

// export default function SignupForm() {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [dateOfBirth,setDob] = React.useState('')
//   const [userEmail, setEmail] = React.useState('');
//   const [userPassword, setPassword] = React.useState('');
//   const [confirmPassword, setConfirmPassword] = React.useState('');
//   const [userMobileNo, setMobileNum] = React.useState('');
//   const [userLisenceNo, setLicenseNum] = React.useState('NA');

//   const [passwordError, setPasswordError] = React.useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPasswordError('');
//     setConfirmPasswordError('');

//     if (userPassword !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       return;
//     }
//     const user = {firstName,lastName,dateOfBirth,userEmail,userPassword,userMobileNo,userLisenceNo}

//     fetch("http://localhost:9090/register",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(user)
  
//     }).then(()=>{
//         console.log({
//             user,
//           });
//     })
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
//         padding: '20px',
//       }}
//     >
//       <Paper elevation={10} sx={{ padding: '30px', borderRadius: '15px', maxWidth: '600px', width: '100%' }}>
//         <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
//           Let's Onboard you!
//         </Typography>
//         <Typography variant="body1" align="center" gutterBottom sx={{ color: '#666' }}>
//           Please fill out the form below to get started.
//         </Typography>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '100%' },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <TextField
//             id="firstName"
//             label="First Name"
//             variant="outlined"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <TextField
//             id="lastName"
//             label="Last Name"
//             variant="outlined"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <TextField
//             id="dateOfBirth"
//             label="Date of Birth"
//             type="date"
//             variant="outlined"
//             value={dateOfBirth}
//             onChange={(e) => setDob(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             // Add value and onChange if necessary
//           />
//           <TextField
//             id="userEmail"
//             label="Email"
//             type="email"
//             variant="outlined"
//             value={userEmail}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             id="userPassword"
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={userPassword}
//             onChange={handlePasswordChange}
//             error={!!passwordError}
//             helperText={passwordError}
//           />
//           <TextField
//             id="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             error={!!confirmPasswordError}
//             helperText={confirmPasswordError}
//           />
//           <TextField
//             id="userMobileNo"
//             label="Mobile Number"
//             type="tel"
//             variant="outlined"
//             value={userMobileNo}
//             onChange={(e) => setMobileNum(e.target.value)}
//           />
//           <TextField
//             id="userLicenseNo"
//             label="License Number (Optional)"
//             variant="outlined"
//             value={userLisenceNo}
//             onChange={(e) => setLicenseNum(e.target.value)}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: 'blue', // default outline color
//                 },
//                 '&:hover fieldset': {
//                   borderColor: 'darkblue', // outline color on hover
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'darkgreen', // outline color when focused
//                 },
//               },
//             }}
//           />
//           <Button
          
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{
//               mt: 2,
//               backgroundColor: 'green',
//               '&:hover': {
//                 backgroundColor: 'darkgreen',
//               },
//               textTransform: 'uppercase',
//               fontWeight: 'bold',
//               letterSpacing: '0.1em',
//               boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }
//-------------------------------------------------------------------------------------------------------

// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';

// export default function SignupForm() {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [dateOfBirth, setDob] = React.useState('');
//   const [userEmail, setEmail] = React.useState('');
//   const [userPassword, setPassword] = React.useState('');
//   const [confirmPassword, setConfirmPassword] = React.useState('');
//   const [userMobileNo, setMobileNum] = React.useState('');
//   const [userLisenceNo, setLicenseNum] = React.useState('NA');

//   const [passwordError, setPasswordError] = React.useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
//   const [formError, setFormError] = React.useState(''); // General form error state

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPasswordError('');
//     setConfirmPasswordError('');
//     setFormError('');

//     if (userPassword !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       return;
//     }

//     const user = { firstName, lastName, dateOfBirth, userEmail, userPassword, userMobileNo, userLisenceNo };

//     fetch("http://localhost:9090/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user)
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return response.json().then((errorData) => {
//             throw new Error(errorData.message || 'Registration failed');
//             alert(errorData);
//           });
//         }
//         return response.json(); // Process the response
//       })
//       .then((data) => {
//         console.log("Registration successful:", data);

//         // Perform any post-registration logic, e.g., navigate to another page
//       })
//       .catch((error) => {
//         console.error("Error during registration:", error.message);
//         setFormError(error.message); // Display the error message
//       });
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
//         padding: '20px',
//       }}
//     >
//       <Paper elevation={10} sx={{ padding: '30px', borderRadius: '15px', maxWidth: '600px', width: '100%' }}>
//         <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
//           Let's Onboard you!
//         </Typography>
//         <Typography variant="body1" align="center" gutterBottom sx={{ color: '#666' }}>
//           Please fill out the form below to get started.
//         </Typography>
//         {formError && (
//           <Typography variant="body2" align="center" gutterBottom color="error">
//             {formError}
//           </Typography>
//         )}
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '100%' },
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         >
//           <TextField
//             id="firstName"
//             label="First Name"
//             variant="outlined"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <TextField
//             id="lastName"
//             label="Last Name"
//             variant="outlined"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <TextField
//             id="dateOfBirth"
//             label="Date of Birth"
//             type="date"
//             variant="outlined"
//             value={dateOfBirth}
//             onChange={(e) => setDob(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//           />
//           <TextField
//             id="userEmail"
//             label="Email"
//             type="email"
//             variant="outlined"
//             value={userEmail}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             id="userPassword"
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={userPassword}
//             onChange={handlePasswordChange}
//             error={!!passwordError}
//             helperText={passwordError}
//           />
//           <TextField
//             id="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             error={!!confirmPasswordError}
//             helperText={confirmPasswordError}
//           />
//           <TextField
//             id="userMobileNo"
//             label="Mobile Number"
//             type="tel"
//             variant="outlined"
//             value={userMobileNo}
//             onChange={(e) => setMobileNum(e.target.value)}
//           />
//           <TextField
//             id="userLicenseNo"
//             label="License Number (Optional)"
//             variant="outlined"
//             value={userLisenceNo}
//             onChange={(e) => setLicenseNum(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{
//               mt: 2,
//               backgroundColor: 'green',
//               '&:hover': {
//                 backgroundColor: 'darkgreen',
//               },
//               textTransform: 'uppercase',
//               fontWeight: 'bold',
//               letterSpacing: '0.1em',
//               boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

//============================================================================================================================

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function SignupForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateOfBirth, setDob] = React.useState('');
  const [userEmail, setEmail] = React.useState('');
  const [userPassword, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [userMobileNo, setMobileNum] = React.useState('');
  const [userLisenceNo, setLicenseNum] = React.useState('NA');

  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
  const [formError, setFormError] = React.useState(''); // General form error state
  const [formSuccess, setFormSuccess] = React.useState(''); // Success message state

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');
    setConfirmPasswordError('');
    setFormError('');
    setFormSuccess('');

    if (userPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    const user = { firstName, lastName, dateOfBirth, userEmail, userPassword, userMobileNo, userLisenceNo };

    fetch("http://localhost:9090/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || 'Registration failed');
          });
        }
        return response.json();
      })
      .then((data) => {
        setFormSuccess('Registration successful!'); // Show success message
      })
      .catch((error) => {
        setFormError(error.message); // Show the error message to the user
      });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        padding: '20px',
      }}
    >
      <Paper elevation={10} sx={{ padding: '30px', borderRadius: '15px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Let's Onboard you!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ color: '#666' }}>
          Please fill out the form below to get started.
        </Typography>
        
        {/* Display success message */}
        {formSuccess && (
          <Typography variant="body2" align="center" gutterBottom color="green">
            {formSuccess}
          </Typography>
        )}
        
        {/* Display error message */}
        {formError && (
          <Typography variant="body2" align="center" gutterBottom color="error">
            {formError}
          </Typography>
        )}

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="dateOfBirth"
            label="Date of Birth"
            type="date"
            variant="outlined"
            value={dateOfBirth}
            onChange={(e) => setDob(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="userEmail"
            label="Email"
            type="email"
            variant="outlined"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="userPassword"
            label="Password"
            type="password"
            variant="outlined"
            value={userPassword}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
          />
          <TextField
            id="userMobileNo"
            label="Mobile Number"
            type="tel"
            variant="outlined"
            value={userMobileNo}
            onChange={(e) => setMobileNum(e.target.value)}
          />
          <TextField
            id="userLicenseNo"
            label="License Number (Optional)"
            variant="outlined"
            value={userLisenceNo}
            onChange={(e) => setLicenseNum(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
