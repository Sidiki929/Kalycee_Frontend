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
import ReportCard from './ReportCard';
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

const Default = () => {
  const theme = useTheme();

  return (
    <>
    <Breadcrumb title="Dahsboard">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
       Accueil
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
         Transactions
        </Typography>
      </Breadcrumb>


      <Grid container spacing={gridSpacing}>
        
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary={<>Depot </>}     
                 secondary={ <h2 style={{color:"green",fontSize:26}}>37 </h2>}
              primaryIcon={<Fab color="success" aria-label="add">
              <ArrowUpwardIcon/>
              </Fab>}
          
              footerData={ 
                <>
                <Divider/>
            
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
          <ReportCard
              primary={<>Retraits</>}
              secondary={ <h2 style={{color:"red",fontSize:26}}>37 </h2>}
              primaryIcon={<Fab color="error" aria-label="add">
                <ArrowDownwardIcon color='white' />
              </Fab>}
          
              footerData={ 
                <>
                <Divider/>
            
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
          <ReportCard
              primary={<>Totals des clients </>}
              secondary={ <h2 style={{color:"blue",fontSize:26}}>37 </h2>}
              primaryIcon={<Fab color="primary" aria-label="add">
                <PersonIcon color='white' />
              </Fab>}
          
            
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          </Grid>


          <br/><br/>
          <Breadcrumb title="Transactions">
    
     
      </Breadcrumb>


    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
        
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="success" aria-label="add">
                <ArrowUpwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
              <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="center" className='cursor-pointer' >
                  <Typography variant="h5" style={{color:"green",cursor:"pointer"}}> Valider <CheckIcon style={{marginBottom:-3}}
                  /> </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="error" aria-label="add">
                <ArrowDownwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
                <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="center" className='cursor-pointer' >
                  <Typography variant="h5" style={{color:"green",cursor:"pointer"}}> Valider <CheckIcon style={{marginBottom:-3}}
                  /> </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="success" aria-label="add">
                <ArrowUpwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
                <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="center" className='cursor-pointer' >
                  <Typography variant="h5" style={{color:"green",cursor:"pointer"}}> Valider <CheckIcon style={{marginBottom:-3}}
                  /> </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="success" aria-label="add">
                <ArrowUpwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
                <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="center" className='cursor-pointer' >
                  <Typography variant="h5" style={{color:"green",cursor:"pointer"}}> Valider <CheckIcon style={{marginBottom:-3}}
                  /> </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="success" aria-label="add">
                <ArrowUpwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
                <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="center" className='cursor-pointer' >
                  <Typography variant="h5" style={{color:"green",cursor:"pointer"}}> Valider <CheckIcon style={{marginBottom:-3}}
                  /> </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary={<>30.000 Fcfa </>}
              secondary="Sidiki Dembele"
              primaryIcon={<Fab color="error" aria-label="add">
                <ArrowDownwardIcon/>
                </Fab>}
          
              footerData={ 
                <>
                <Divider/>
              <Stack  justifySelf="center"
              style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginBottom:10,marginTop:10}}
              alignSelf="center"
              textAlign="center"
                flexDirection="row"
                justifyContent="space-between" >
                  <Typography variant="h5" style={{color:"green"}}> Valider </Typography>
                    <Typography variant="h5" style={{color:"red"}}> Refuser </Typography>
              </Stack>
              </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
         
        </Grid>
      </Grid>
   {/*    <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <SalesLineCard
                      chartData={SalesLineCardData}
                      title="Sales Per Day"
                      percentage="3%"
                      icon={<TrendingDownIcon />}
                      footerData={[
                        {
                          value: '$4230',
                          label: 'Total Revenue'
                        },
                        {
                          value: '321',
                          label: 'Today Sales'
                        }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: { md: 'block', sm: 'none' } }}>
                    <Card>
                      <CardContent sx={{ p: '0 !important' }}>
                        <Grid container alignItems="center" spacing={0}>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  REALTY
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                                  -0.99
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  INFRA
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                                  -7.66
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RevenuChartCard chartData={RevenuChartCardData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Traffic Sources
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="direct" value={80} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Social" value={50} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Referral</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Bounce</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          60%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Bounce" value={60} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
    </>
  );
};

export default Default;
