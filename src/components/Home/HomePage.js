import React from 'react'
import HomePageHeader from '../Navigation/HomePageHeader.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div style = {{background: "#F6F6F8"}}>
            <HomePageHeader />
            <Grid
            container
            direction="row"
            justifyContent = "center"
            alignItems = "flex-start"
            />
            <Grid item xs = {6}>
            <Paper className={classes.paper} elevation={3}>
                    <Typography> Profile Information </Typography>
                </Paper>

                <Paper elevation = {3}>
                    <Typography>
                        All Projects
                    </Typography>

                    <Typography>
                        Favorites
                    </Typography>

                    <Typography>
                        Your Projects
                    </Typography>
                </Paper>

            </Grid>

            
        </div>
    )
}
export default HomePage;