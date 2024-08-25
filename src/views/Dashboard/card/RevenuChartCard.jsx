import PropTypes from 'prop-types';
import React from 'react';
import Person from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography, useMediaQuery } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| REVENUE CHART CARD ||============================== //

const RevenuChartCard = ({ chartData }) => {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      <CardHeader
        title={
          <Typography t="div" className="card-header">
         
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
          <Grid item xs={12} sm={7} md={12}>
            <center>
            <Person sx={{fontSize:160}}/>

            <Typography variant="h3">Sidiki Dembele</Typography>


            <Typography variant="h6">Administrateur</Typography>
            </center>
<Divider/>
          </Grid>
          <Grid item sx={{ display: { md: 'block', sm: 'none' } }}>
          
          </Grid>
          <Grid
            item
            container
            direction={matchDownMd && !matchDownXs ? 'column' : 'row'}
            justifyContent="space-around"
            alignItems="center"
            xs={12}
            sm={5}
            md={12}
          >
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6"></Typography>
                <Button style={{background:theme.palette.primary.main}}>   <Typography variant="subtitle1" sx={{color:"white"}} >
                Modifer informations
                </Typography></Button> 
              </Grid>
            </Grid>
           
            <Grid item>
              <Grid container direction="column">
              <Button style={{background:theme.palette.warning.main}}>  <Typography variant="subtitle1" >
                Modifer mot de passe
                </Typography></Button> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
      </CardContent>
    
           <center>
              <Button style={{background:theme.palette.error.main}}>  <Typography variant="subtitle1" sx={{color:"white"}}>
               Deconnexion
                </Typography></Button> 
           
                </center><br/>
    </Card>
  );
};

RevenuChartCard.propTypes = {
  chartData: PropTypes.object
};

export default RevenuChartCard;
