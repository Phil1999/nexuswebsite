import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles} from '@material-ui/core'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {IconContext} from "react-icons"
import { FaTimes } from "react-icons/fa";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
}

const steps = getSteps();



export const Resume = ({ formData, setForm, navigation }) => {

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
    
    const [file, setFile] = React.useState("");
    

    function handleUpload(event) {
        setFile(event.target.files[0]);
        // Add code here to upload file to server
        
      }

    const CustomTypographyHead = withStyles({
        root: {
          color: "#757575",
          opacity: "50%",
          fontWeight: 700,
          textAlign: "center",
          width: "33rem",
        }
        
      })(Typography);
    return (
      <div>
        
      <Stepper activeStep= {3}>
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
            textAlign: "center",
            
            transform: 'translate(-50%, -50%)'}}
            >
            <CustomTypographyHead>
                Uploading a resume and/or cover letter is incredibly helpful for
                project owners to get a better idea of your skills and qualities.
            </CustomTypographyHead>

            <Typography>Example resume: <Link href = "#" underline = "none"> UW's Purple and Gold Resume template </Link> </Typography>
        <Typography variant = "h5"> Resume </Typography>
        
        <Button variant = "outlined"> ATTACH </Button>
        <Button variant = "outlined"> DROPBOX </Button>
        <Button variant = "outlined"> PASTE </Button>

        <Typography>Resources</Typography>
        <Typography> {">"} <Link href = "#" underline = "none"> Top 10 Most Common Resume Errors </Link> </Typography>
        <Typography> {">"} <Link href = "#" underline = "none"> How to Word Your Resume </Link> </Typography>
        <Typography> {">"} <Link href = "#" underline = "none"> What Not to Put in Your Resume </Link> </Typography>
        <Typography> {">"} <Link href = "#" underline = "none"> Must Have's in Resumes </Link> </Typography>
        <Typography> {">"} <Link href = "#" underline = "none"> Do's and Don'ts for your Resume </Link> </Typography>
        
        <Button onClick={navigation.next}>Skip</Button>
        <ColorButton onClick={navigation.next}>
        Next
        </ColorButton>
        </div>
</div>
    )
}