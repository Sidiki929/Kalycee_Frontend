import React , {useEffect , useState} from 'react';

// material-ui

import { useTheme, styled } from '@mui/material/styles';
import Box  from '@mui/material/Box';
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
import Transactions from "../../Transactions";
import { format } from 'date-fns';
import axios from 'axios';

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


  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchAllTransactions = async () => {
      try {
        // Lancer les deux requêtes en parallèle avec Promise.all
        const [getTransactions, getAlluser] = await Promise.all([
          axios.get("https://kalycee-backend.vercel.app/api/transactions/getall"),
          axios.get("https://kalycee-backend.vercel.app/api/user/getAllUser")
        ]);
    
        // Vérifier la validité des réponses des deux API
        if (getTransactions.status === 200 && getAlluser.status === 200) {
          setTransactions(getTransactions.data); // Mettre à jour l'état des transactions
          setUsers(getAlluser.data);             // Mettre à jour l'état des utilisateurs
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        // Gérer l'erreur
        console.error('Erreur lors de la récupération des données:', error);
      }
    };
    

    fetchAllTransactions();
  }, []);
  const theme = useTheme();
    const columns = [
        { id: 'name', label: 'Nom ', minWidth: 170 },
        { id: 'phone', label: 'Numéro de téléphone', minWidth: 100 },
        {
            id: 'montant',
            label: "Montant",
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'type',
            label: "Type de transfert",
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'date',
            label: "Date",
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'statut',
            label: 'Statut',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    function createData(name, phone,montant, type, date, statut ) {
        // const density = population / size;
        return { name, phone,montant, type, date, statut };
    }

    

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const totalDeposits = transactions?.filter((transaction) => transaction.transfertType === 'envoi').length;
    const totalRetrait = transactions?.filter((transaction) => transaction.transfertType === 'retrait').length;
    const updateTransactionStatus = async (transactionId) => {
        try {
            const response = await axios.put(
                `https://kalycee-backend.vercel.app/api/transactions/update/${transactionId}`
            );
            if (response.status === 200) {
                console.log("Statut mis à jour avec succès :", response.data);
                // Mettre à jour localement après succès
                setTransactions((prevTransactions) =>
                    prevTransactions.map((transaction) =>
                        transaction._id === transactionId
                            ? { ...transaction, transfertState: "accepted" }
                            : transaction
                    )
                );
                setTransactions((prevTransactions) =>
                    prevTransactions.filter((transaction) => transaction._id !== transactionId)
                );
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour du statut :", error);
        }
    };

  return (
    <>
    <Breadcrumb title="Dahsboard">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
       KALYCEE
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
         Dashboard
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing} style={{marginTop:-35}}>
          <Grid item lg={4} sm={6} xs={12}>
              <Card>
                  <CardContent>
                      <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                              <Typography variant="h3" sx={{ color: "none" }}>
                                  Dépôts
                              </Typography>
                              <Typography variant="p" sx={{marginTop: '.5rem'}}>
                                  <h3 style={{color: "green", fontSize: 24}}>{totalDeposits} </h3>
                              </Typography>
                          </Grid>
                          <Grid item>
                              <Typography variant="h2" sx={{ color: "none" }}>
                                  <Fab color="success" aria-label="add">
                                      <ArrowUpwardIcon style={{color:"white"}}/>
                                  </Fab>
                              </Typography>
                          </Grid>
                      </Grid>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
              <Card>
                  <CardContent>
                      <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                              <Typography variant="h3" sx={{ color: "none" }}>
                                  Retraits
                              </Typography>
                              <Typography variant="p" sx={{marginTop: '.3rem'}}>
                                  <h3 style={{color: "green", fontSize: 24}}>{totalRetrait && totalRetrait} </h3>
                              </Typography>
                          </Grid>
                          <Grid item>
                              <Typography variant="h2" sx={{ color: "none" }}>
                                  <Fab color="error" aria-label="add">
                                      <ArrowDownwardIcon color='white'  />
                                  </Fab>
                              </Typography>
                          </Grid>
                      </Grid>
                  </CardContent>
              </Card>

          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
              <Card>
                  <CardContent>
                      <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                              <Typography variant="h3" sx={{ color: "none" }}>
                                  Totals des clients
                              </Typography>
                              <Typography variant="p" sx={{marginTop: '.3rem'}}>
                                  <h3 style={{color: "green", fontSize: 24}}>{users?.length} </h3>
                              </Typography>
                          </Grid>
                          <Grid item>
                              <Typography variant="h2" sx={{ color: "none" }}>
                                  <Fab color="primary" aria-label="add">
                                      <PersonIcon color='white' />
                                  </Fab>
                              </Typography>
                          </Grid>
                      </Grid>
                  </CardContent>
              </Card>
          </Grid>
          </Grid>
          <Breadcrumb title="Transactions" style={{marginTop:10}}>
      </Breadcrumb>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
        {transactions.length > 0 ? (
        transactions.filter((transaction)=>transaction.transfertState === "pending").slice(0,8).map((transaction) => (
          <Grid item lg={3} sm={6} xs={12} key={transaction.id}>
            <ReportCard
              primary={<> {transaction.amount} Fcfa </>} // Affichage du montant de la transaction
              secondary={`${transaction.nom} ${transaction.prenom}`} // Affichage du nom complet du client
              primaryIcon={
                <Fab color={transaction.transfertType === "envoi" ? "success" : "error"} aria-label="add">
                  {transaction.transfertType === "envoi" ? (
                    <ArrowUpwardIcon style={{ color: "white" }} />
                  ) : (
                    <ArrowDownwardIcon style={{ color: "white" }} />
                  )}
                </Fab>
              }
              footerData={
                <>
                  <Divider />
                  <Stack
                    justifySelf="center"
                    style={{
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                    alignSelf="center"
                    textAlign="center"
                    flexDirection="row"
                    justifyContent="center"
                    className="cursor-pointer"
                  >
                    <Typography
                      variant="h5"
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => updateTransactionStatus(transaction?._id)}
                    >
                      {transaction.transfertState === "pending" ? (
                        <b style={{color:"lightseagreen"}}>Valider </b>
                      ) : (
                        <>Validé <CheckIcon style={{ marginBottom: -3 }} /></>
                      )}
                    </Typography>
                  </Stack>
                </>
              }
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
              theDate={
                  <Stack>
                      <b style={{color: "gray"}}>
                          {/* Formater la date de la transaction */}
                          {transaction.date_transaction ? format(new Date(transaction.date_transaction), 'dd/MM/yyyy : HH:ss' ) : "Date non disponible"}
                      </b>
                      <b style={{color: "orange"}}>En attente </b>
                  </Stack>
              }/>
          </Grid>
        ))
      ) : (
        <Typography style={{marginTop:20,marginLeft:17}} variant="h4">Aucune transaction disponible</Typography>
      )}


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
