import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "../../images/nexus_logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
    logo: {
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '3.5rem',
        marginLeft: '2rem',
      },
      toolbarButtons: {
        marginLeft: 'auto',
        marginRight: '2.5rem',
        color: "#888888",
        font: "Open Sans",
        fontWeight: "bold",
      },
  }));

const Header = ({}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static" style ={{background:"white"}}>
        <Toolbar>
            <img src= {logo} alt="logo" className={classes.logo} />
          <div className = {classes.toolbarButtons}>
          <Button color="inherit">Discover Projects</Button>
          <Button color="inherit">Find Network</Button>
          <Button color="inherit">My Profile</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;