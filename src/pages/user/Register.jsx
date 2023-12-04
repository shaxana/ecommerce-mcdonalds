import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form,Field } from 'formik';
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
    // .test("Name must contain only letters"),
  password: Yup.string().required("Required"),
  balance: Yup.string()
    // .test("balance must contain number", digitsOnly)
    .required("Required"),
});
 function Register() {
 
  let navigate = useNavigate()
  return (
   <div style={{background: 'url(https://eu-assets.simpleview-europe.com/stokebid/imageresizer/?image=%2Fdmsimgs%2FMCDONALDS_14_128333773.jpg&action=ProductDetailProFullWidth)',
   backgroundSize: 'cover',
   backgroundPosition: 'center',}}>
     <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         
          }}
        >
             <Paper
              elevation={3}
              sx={{
                backdropFilter: 'blur(10px)', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                marginTop:'0px',
                padding: '40px', 
                width: '100%', 
              }}
            >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box> */}
          <Box>
            <Formik
            initialValues={{
              name:"",
              password:"",
              balance:"",
              agreement:false,
            
            
            }}
            validationSchema={SignupSchema}
          onSubmit={(values) =>{
              values.isAdmin = false;
              values.basket = [];
              values.wishlist = []

              if (values.agreement){
                console.log(values);
                axios.post("http://localhost:3000/users/", values)
                navigate("/login")
              }
              else{
                alert("Please, check the box")
              }
            }}>
            <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" />
            <br />
            <label htmlFor="password">Password</label>
            <Field name="password" />
            <br />
            <label htmlFor="balance">Balance</label>
            <Field name="balance" />
            <br />
            <label htmlFor="agreement">I agree all the terms </label>
            <Field name="agreement" type="checkbox" />
            <Button type="submit">Submit</Button>
            <br />
            
            </Form>

            </Formik>
          </Box>

          </Paper>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
   </div>
  );
}


export default Register