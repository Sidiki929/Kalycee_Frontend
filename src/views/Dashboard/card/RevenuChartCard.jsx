import PropTypes from 'prop-types';
import React , {useState , useEffect} from 'react';
import Person from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography, useMediaQuery } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| REVENUE CHART CARD ||============================== //

const RevenuChartCard = ({ chartData }) => {
    const [userData, setUserData] = useState(null);
    
        useEffect(() => {
            // Récupérer les données de l'utilisateur depuis localStorage
            const storedUserData = JSON.parse(window.localStorage.getItem("userData"));
            setUserData(storedUserData);
        }, []);
    
        
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));
  const handleLogout = () => {
    // Supprimer les informations utilisateur stockées dans localStorage
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loggedIn");

    // Supprimer le cookie de refreshToken si vous l'avez utilisé
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Rediriger vers la page de connexion
    window.location.href = "/";

    alert("Déconnexion réussie !");
};

  return (
      <Card>
          <CardHeader
              title={
                  <Typography variant="h5" className="card-header">
                      Profil Utilisateur
                  </Typography>
              }
          />
          <Divider />
          <CardContent>
              <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'} alignItems="center">
                  <Grid item xs={12} sm={7} md={12} textAlign="center">
                      <Person sx={{ fontSize: 160 }} />
                      <Typography variant="h3">{userData?.prenom} {userData?.nom}</Typography>
                      <Typography variant="h6">Administrateur</Typography>
                      <Divider sx={{ my: 2 }} />
                  </Grid>

               {/*    <Grid item xs={12} sm={5} md={12} gap={1} container direction={matchDownMd && !matchDownXs ? 'column' : 'row'} justifyContent="space-around" alignItems="center">
                      <Grid item>
                          <Button variant="contained" sx={{ background: "blue" }}>
                              <Typography variant="subtitle1" sx={{ color: "white" }}>
                                  Modifier informations
                              </Typography>
                          </Button>
                      </Grid>
                      <Grid item>
                          <Button variant="contained" sx={{ background: "orange" }}>
                              <Typography variant="subtitle1">
                                  Modifier mot de passe
                              </Typography>
                          </Button>
                      </Grid>
                  </Grid> */}
              </Grid>
          </CardContent>

          <center>
              <Button onClick={handleLogout} variant="contained" sx={{ background: theme.palette.error.main, mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                      Déconnexion
                  </Typography>
              </Button>
          </center>
      </Card>
  );
};

RevenuChartCard.propTypes = {
  chartData: PropTypes.object
};

export default RevenuChartCard;
