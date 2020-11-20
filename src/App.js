import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './favicon.ico';
import tokopedia from './tokopedialogo.jpg';
import whatsapp from './whatsapplogo.jpg';
import tokotukuada from './tokotukuadalogo.jpg';
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        tokotukuada
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    marginTop: theme.spacing(1),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  Button: {
    width: '55%',
  }
}));




function App() {
const classes = useStyles();
  return (
   <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
          <img src={logo} className={classes.large} alt="logo" />

        <Typography component="h1" variant="h5">
          Order Via
        </Typography>
        <form className={classes.form} noValidate>
         <Button
           type="submit"
           fullWidth
           variant="outlined"
           className={classes.submit}
           href="https://www.tokotukuada.com/shop"
         >
           <img src={tokotukuada} className={classes.Button}alt="logo" />
         </Button>

         <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            href="https://api.whatsapp.com/send?phone=6287891992872&text=Hallo%20Admin,%20saya%20ingin%20informasi%20mengenai"
          >
            <img src={whatsapp} className={classes.Button}alt="logo" />
          </Button>


          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            href="https://www.tokopedia.com/tokotukuada"
          >
            <img src={tokopedia} className={classes.Button}alt="logo" />
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
