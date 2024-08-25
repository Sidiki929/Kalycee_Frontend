import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';
import Breadcrumb from 'component/Breadcrumb';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
//project import
import SalesLineCard from 'views/Dashboard/card/SalesLineCard';
import SalesLineCardData from 'views/Dashboard/card/sale-chart-1';
import RevenuChartCard from 'views/Dashboard/card/RevenuChartCard';
import RevenuChartCardData from 'views/Dashboard/card/revenu-chart';
import ReportCard from 'views/Dashboard/Default/ReportCard';
import { Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Stack } from '@mui/material';
import { ProductionQuantityLimits } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { gridSpacing } from 'config.js';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Profile = () => {
  const theme = useTheme();

  return (
    <>
    <Breadcrumb title="Profile">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
       Accueil
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
         Profile
        </Typography>
      </Breadcrumb>



    <Grid container spacing={gridSpacing}>
    
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing}>
                
            
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RevenuChartCard chartData={RevenuChartCardData} />
              </Grid>
            </Grid>
          </Grid>
        
        </Grid>
      </Grid> 
    </Grid>
    </>
  );
};

export default Profile;
