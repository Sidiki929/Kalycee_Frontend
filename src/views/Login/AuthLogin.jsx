import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import swal from 'sweetalert';

const AuthLogin = ({ ...rest }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
        const response = await axios.post('http://localhost:3002/api/user/loginUser', {
            username: values.username,
            password: values.password,
        });

        if (response.status === 200) {
            alert('Login successful');
            window.localStorage.setItem("userData", JSON.stringify(response.data));
             window.localStorage.setItem("token", response.data.token); 
            window.localStorage.setItem("loggedIn", true); 
            window.location.replace('./dashboard/default');
        } else {
            // Handle other statuses as needed
            alert('Login failed. Please try again.');
            setErrors({ submit: 'Login failed. Please try again.' });
        }
    } catch (error) {
        let errorMessage = 'Login failed. Please check your credentials and try again.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }

        // Affiche une alerte JavaScript pour les erreurs
        alert(errorMessage);
        setErrors({ submit: errorMessage });
    } finally {
        setSubmitting(false);
    }
};



  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          {/* Additional content can be added here if needed */}
        </Grid>
      </Grid>

    

      <Formik
        initialValues={{
          username: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={handleLogin}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.username && errors.username)}
              fullWidth
              helperText={touched.username && errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.username}
              variant="outlined"
            />

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"  >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

           

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
              Connexion
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
