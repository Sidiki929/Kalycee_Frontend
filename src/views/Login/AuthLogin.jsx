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
import Logo from "../../assets/images/logo_kalycee.png"

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
            alert('Connexion réussie !');

            // Stocker les informations utilisateur dans localStorage
            window.localStorage.setItem("userData", JSON.stringify(response.data));
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("loggedIn", true);

            // Rediriger vers la page d'accueil
            window.location.href = '/kalycee/home/';
        } else {
            alert('Échec de la connexion. Veuillez réessayer.');
            setErrors({ submit: 'Échec de la connexion. Veuillez réessayer.' });
        }
    } catch (error) {
        let errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
        
        // Si le serveur renvoie une réponse d'erreur
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        
        alert(errorMessage);
        setErrors({ submit: errorMessage });
    } finally {
        setSubmitting(false);
    }
};



  return (
    <>
      <Grid container justifyContent="center" >

        <div   >
          <img  style={{height:250,width:260,textAlign:"center",
justifyContent:"center",padding:0,marginTop:-70,

          }} src={Logo} />
              </div>
     <h2 style={{marginTop:-50,fontSize:29}}>Connexion</h2>
      </Grid>

      <Formik
        initialValues={{
          username: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("Nom d'utilisateur requis"),
          password: Yup.string().max(255).required('Mot de passe requis')
        })}
        onSubmit={handleLogin}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.username && errors.username)}
              fullWidth
              helperText={touched.username && errors.username}
              label="Nom d'utilisateur"
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
              <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
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
                style={{background:"black"}}
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
