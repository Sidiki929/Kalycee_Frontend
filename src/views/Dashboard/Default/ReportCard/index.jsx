import PropTypes from 'prop-types';
import React from 'react';
import { ProductionQuantityLimits } from '@mui/icons-material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| REPORT CARD ||============================== //

const ReportCard = ({ primary, secondary, iconPrimary, color, footerData, iconFooter ,primaryIcon }) => {
  const theme = useTheme();
  const IconPrimary = iconPrimary;
  //const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter /> : null;

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" sx={{ color: color }}>
              {primary}
            </Typography>
            <Typography variant="p" sx={{ marginTop: '.5rem' }}>
              {secondary}
             
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" sx={{ color: color }}>
              {primaryIcon} 
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ background: color }}>
       
              {footerData} 
              
           
     
    
      </Box>
    </Card>
  );
};

ReportCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  footerData: PropTypes.string,
  iconFooter: PropTypes.object,
  color: PropTypes.string
};

export default ReportCard;
