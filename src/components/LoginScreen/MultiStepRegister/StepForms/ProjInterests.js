import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./ProjInterests.css"
import {IconContext} from "react-icons"
import { FaRegCheckCircle } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
}

const steps = getSteps();

export const ProjInterests = ({ formData, setForm, navigation }) => {
  
  const CustomCard = withStyles({
    root: {
      marginBottom: "0.5rem",
      width: '48vh',
      marginRight: "0.5rem",
      borderRadius: 5,
      border: "1px solid #757575",
      
    },
    
  })(Card);

  const ColorButton = withStyles((theme) => ({
    root: {
      fontSize: 16,
      color: "#F05A28",
      borderColor: "#F05A28",
      font: "Open Sans",
      fontWeight: 700,
      width: 200,
      height: 50,
      border: '2px solid',
      borderRadius: 10,
      position: 'fixed',
        bottom: '-35vh',
        right:'-50vh',
        marginRight: "2rem",
        marginBottom: "3rem",
    },
  }))(Button);

  const CustomTypographyHead = withStyles({
    root: {
      textAlign: "center",
      color: "#757575",
      opacity: "50%",
      fontWeight: 700,
      textTransform: "uppercase",
      marginBottom: "3rem",
    }
    
  })(Typography);

  const CustomTypographyBody = withStyles({
    root: {
      color: "#757575",
      
    }
    
  })(Typography);

  

  function FormCard(props) {
    const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
    return (
      <div>
      <CustomCard className={clicked ? 'clicked': null} 
                onClick={handleClick}>
    <CardActionArea>
        <CardContent>
            <CustomTypographyBody className={clicked ? 'whiteText': null}> {props.msg} </CustomTypographyBody>
            <IconContext.Provider value ={{
              style:
               {
                 fontSize: '16px',
                  color: "#FFFFFF",
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                   float: "right"}}}>
            <FaRegCheckCircle />
            </IconContext.Provider>
        </CardContent>
    </CardActionArea>
</CustomCard>
</div>
    )
  }
  return (
    <div>
      <Stepper activeStep= {1}>
                {steps.map(label => (
                    <Step key ={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
    
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
    
  }}>
    <CustomTypographyHead> Select up to 5 of your interests</CustomTypographyHead>
        <Grid container direction="row">
  <Grid item>
    <Grid container direction="column">
      <FormCard
      msg = "Software Development"
      />
      <FormCard
      msg = "Design-Hardware"
      />
      <FormCard
      msg = "Healthcare"
      />
      <FormCard
      msg = "Aerospace"
      />
    </Grid>
  </Grid>
  <Grid item>
    <Grid container direction="column">
    <FormCard
      msg = "Automobile Creation"
      />
      <FormCard
      msg = "Professional Communication"
      />
      <FormCard
      msg = "Environmentalism"
      />
      <FormCard
      msg = "Data Science"
      />
      
    </Grid>
  </Grid>
</Grid>
<ColorButton variant = "outlined" onClick={navigation.next}> Next </ColorButton>
      
    </div>
    </div>
  );
};
