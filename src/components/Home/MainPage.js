import React from 'react';
import MainPageHeader from '../Navigation/MainPageHeader.js'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import people from "../../images/people.png";
import Button from '@material-ui/core/Button';
import { SwirlyDivider } from '../Props/SwirlyDivider.js'
import FooterBackground from "../../images/swirlyend.png";
import logo from "../../images/nexus_logo.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    passion: {
      marginTop: '20vh',
      marginBottom: '5vh',
    },

    passionMain: {
        margin: '10rem',
    },

    logo: {
        maxWidth: '3.5rem',
      },

    FooterContent: {
        position: "relative",
        top: 200,
        left: 25,
    }
    
  }));

const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            <MainPageHeader />

            <div className = {classes.center}>
                <div className = {classes.passion}>
                <img style = {{float: 'left'}} src= {people} alt="people" />  
                <div className = {classes.passionMain}>
                <Typography> Find your next passion project </Typography>
                <Typography> Discover 100+ self-motivated students on the NEXUS Network </Typography>
                <Button variant = 'contained'> Find your Project </Button>
                <Button variant = 'contained'> Browse Network </Button>
                </div>
                <img style = {{float: 'right'}} src= {people} alt="people" /> 
                </div>
            </div>

            <div >
                <SwirlyDivider />
            </div>
            <div className = {classes.center}>
                <div>
                    <Typography>what we do here at NEXUS </Typography>
                    <Card>
                        <CardContent>
                            <Typography> If you are looking to get recruited for a project </Typography>
                            <Button variant = 'contained'> Join the Network </Button>
                        
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                        <Typography> If you are looking for a side project </Typography>
                        <Button variant = 'contained'> Find your Project </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                        <Typography> If you are recruiting for your dream project </Typography>
                        <Button variant = 'contained'> Create your Project </Button>
                             </CardContent>
                    </Card>
                    <Typography>The NEXUS Network</Typography>
                <Typography> Join the community of self-motivated and driven students.
                    Find a teammate or explore side project opportunities. Let's fuel your
                    future! </Typography>
                </div>

                
            </div>
            <div style = {{
        background: `url(${FooterBackground}`,
        backgroundSize: "cover",
        width: "100%",
        height: "500px",
        position: "absolute",
        }}>
            <div className={classes.FooterContent}>
            <img src= {logo} alt="logo" className={classes.logo} />
                <Typography> Supporting and empowering self-motivated and
                    driven students toward their future.
                </Typography>
                <Divider variant = "middle" style = {{
                    width: "95%",
                    backgroundColor: "white",
                    }} />
                    <Button>Find Projects </Button>
                    <Button>Join Network </Button>
                    <Button>Recruit Team </Button>

                    <Button>Post a project </Button>
                    <Button>View profile </Button>

                    <Typography> Copyright 2020 - NEXUS Builders </Typography>
                </div>
                </div>    
        </div>
    )
}
export default MainPage;
