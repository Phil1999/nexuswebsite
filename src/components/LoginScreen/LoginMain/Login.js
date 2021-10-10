import React from 'react'
import logo from "../../../images/nexus_logo.png"
import uw from "../../../images/uwlogo.png"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import brain from "../../../images/brain.png"
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    leftText: {
      marginLeft: '5rem',
      marginBottom: '2rem',
      fontFamily: 'Open Sans',
      fontWeight: '700',
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container>   
     <Grid style = {{backgroundColor: '#F6F6F8'}} item xs={6}>
     <div className = {classes.leftText}> 
         <img src = {logo} style = {{width: "87px",
        marginBottom: '4rem',
        marginTop: '1.5rem'}} alt = ""></img>
        
         <Typography style = {{color: "#757575"}}>Project Search Engine</Typography>

         <Typography>Let your ideas shine.</Typography>
         <Typography>Together we can go further.</Typography>
         </div>
         <img src = {brain} style = {{width: "40vw", marginBottom: "10rem"}} alt = ''></img>    
            
     </Grid>
     
     <Grid item xs={6} align = "center" style = {{marginTop: "20vh"}}>
         
     <img src = {uw} style = {{width: "40vh"}} alt = ''></img>
     <Typography>You are required to log in with your University</Typography>
     <Typography>of Washington account.</Typography>
     <Button variant="contained" style = {{width: "40vh"}} color="primary">
        <Typography style = {{fontSize: "1rem", color: "white"}}> Sign in with NETID </Typography>
        <Typography style = {{fontSize: "2.25rem", color: "white", fontFamily: "Open Sans", marginLeft: "2.5rem"}}> > </Typography>
      </Button>

      <Typography style = {{position: "relative",
    bottom: "-35vh", left: "-2vw"}}>Copyright © NEXUS UW 2021.</Typography>   
     
     </Grid>
</Grid>
    )
}
export default Login;