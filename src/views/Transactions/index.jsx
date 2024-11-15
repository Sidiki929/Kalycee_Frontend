import React ,{ useEffect ,useState}from 'react';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress, Stack } from '@mui/material';
//project import
import SalesLineCard from 'views/Dashboard/card/SalesLineCard';
import SalesLineCardData from 'views/Dashboard/card/sale-chart-1';
import RevenuChartCard from 'views/Dashboard/card/RevenuChartCard';
import RevenuChartCardData from 'views/Dashboard/card/revenu-chart';
import ReportCard from 'views/Dashboard/Default/ReportCard';
import { gridSpacing } from 'config.js';
import Breadcrumb from 'component/Breadcrumb';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';



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

const rows = [
  createData('Alice Dupont', '+33 1 23 45 67 89', '250 Euros', 'Envoi', '15/10/24', 'Valide'),
  createData('Bob Martin', '+33 1 98 76 54 32', '400 Euros', 'Retrait', '16/10/24', 'Refusé'),
  createData('Claire Lefevre', '+33 1 11 22 33 44', '150 Euros', 'Envoi', '17/10/24', 'Valide'),
  createData('David Bernard', '+33 1 55 66 77 88', '500 Euros', 'Retrait', '18/10/24', 'Valide'),
  createData('Emma Durand', '+33 1 22 33 44 55', '200 Euros', 'Envoi', '19/10/24', 'Refusé'),
  createData('François Petit', '+33 1 44 55 66 77', '300 Euros', 'Retrait', '20/10/24', 'Valide'),
  createData('Gabrielle Moreau', '+33 1 88 77 66 55', '350 Euros', 'Envoi', '21/10/24', 'Refusé'),
  createData('Hugo Simon', '+33 1 99 88 77 66', '450 Euros', 'Retrait', '22/10/24', 'Valide'),
  createData('Isabelle Fournier', '+33 1 12 34 56 78', '600 Euros', 'Envoi', '23/10/24', 'Valide'),
  createData('Julien Lambert', '+33 1 33 22 11 00', '700 Euros', 'Retrait', '24/10/24', 'Refusé'),
];

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAllTransactions = async () => {
      try {
        // Récupérer les transactions depuis l'API
        const getTransactions = await axios.get("https://kalycee-backend.vercel.app/api/transactions/getall");

        if (getTransactions.status === 200) {
          setTransactions(getTransactions.data);
        } else {
          console.error('Erreur lors de la récupération des transactions');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des transactions:', error);
      }
    };

    fetchAllTransactions();
  }, []);

  const [age, setAge] = useState('Toutes');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const filteredTransactions = transactions.filter(transaction => {
    if (age === 'Toutes') return true; // Si aucune option n'est sélectionnée, afficher toutes les transactions
    if (age === 10) return transaction.transfertType === 'envoi'; // Dépôts
    if (age === 20) return transaction.transfertType === 'retrait'; // Retraits
    return true;
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  

  const theme = useTheme();

  return (
    <>

<Breadcrumb title="Transactions">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
       KALYCEE
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
         Transactions
        </Typography>
      </Breadcrumb>


    <Grid container spacing={3}>
     
        <Paper sx={{ width: '97%',marginX:"auto", overflow: 'hidden',justifyContent:"center",marginTop:1}}>
      <TableContainer sx={{ maxHeight: 440,width:"100%" }}>
      <Stack justifyContent="space-between" flexDirection="row" style={{ width: "100%", padding: 12 }}>
      <Stack gap={5} direction="start">
        <h3>Total des transactions ({filteredTransactions.length})</h3>
      </Stack>
      <Stack gap={5} direction="end" style={{ padding: 15 }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth style={{ height: 40 }}>
            <Select
              style={{ height: 40, width: 120, borderRadius: 5 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value={'Toutes'}>Toutes</MenuItem>
              <MenuItem value={10}>Dépôts</MenuItem>
              <MenuItem value={20}>Retraits</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>
        <Table className='bg-red-400' style={{top:10}}  >
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Numéro</TableCell>
            <TableCell> Montant</TableCell>
            <TableCell>Type de Transfert</TableCell>
            <TableCell>Date de Transaction</TableCell>
            <TableCell>État</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {filteredTransactions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((transaction) => (
              <TableRow hover role="checkbox" tabIndex={1} key={transaction?._id}>
                <TableCell>{transaction?.prenom} {transaction?.nom}</TableCell>
                <TableCell>+223 66778899</TableCell>
                <TableCell>{transaction?.amount}</TableCell>
                <TableCell>
                <Chip
                label={capitalize(transaction?.transfertType)}
                color={transaction?.transfertType === 'envoi' ? 'warning' : 'secondary'}
                variant="fill"
                />


                </TableCell>
                <TableCell>{new Date(transaction?.date_transaction).toLocaleDateString()}</TableCell>
                <TableCell>
  <Chip
    label={capitalize(transaction?.transfertState)}
    color={transaction?.transfertState === 'pending' ? 'warning' : 'success'}
    variant="outlined"
  />
</TableCell>

                
              </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>




    </Grid>
    </>
  );
};

export default Transactions;
