import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// Still have to make global font. 

function getSteps() {
    return ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  }

const steps = getSteps();



export const GenInfo = ({ formData, setForm, navigation }) => {
    const CustomTypography = withStyles({
        root: {
          font: "Open Sans",
          fontSize: 16,
          fontWeight: 600,
          marginTop: "0.5rem",
        }
        
      })(Typography);
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
            bottom: '-30vh',
            right:'-78vh',
            
            marginRight: "2rem",
            marginBottom: "3rem",
        },
      }))(Button);

    const { name, year, major, campus} = formData;

    const [ nameVar, setName ] = React.useState('');

    const [ majorVar, setMajor ] = React.useState('');

    const [yearVar, setYear] = React.useState('');

    const [campusVar, setCampus] = React.useState('');

    const campuses = [
        {
            value: 'Seattle',
            label: 'Seattle',
        },
        {
            value: 'Tacoma',
            label: 'Tacoma',
        },
        {
            value: "Bothell",
            label: 'Bothell',
        },
    ];

    const years = [
        {
            value: 'Freshman',
            label: 'Freshman',
        },
        {
            value: 'Sophomore',
            label: 'Sophomore',
        },
        {
            value: 'Junior',
            label: 'Junior',
        },
        {
            value: 'Senior',
            label: 'Senior',
        },
        {
            value: 'Masters',
            label: 'Masters/PhD',
        },
    ];

    const handleChange = (event) => {
        setYear(event.target.value);
        setCampus(event.target.value);
      };
      
    return (
        <div>
            <Stepper activeStep= {0}>
                {steps.map(label => (
                    <Step key ={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        <div style={{
            width: '40vh',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            
            
            <CustomTypography component="h5" variant="h5" >
                    Full Name
                </CustomTypography>
                <TextField 
                    placeholder="E.g. John Doe"
                    name="name"
                    value={ formData.name }
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    onChange={setForm}
                    fullWidth
                    required
                    id="standard-required"
                    label="Required"
                    autoFocus
                />
                <CustomTypography component="h5" variant="h5" >
                    Year
                </CustomTypography>
                <TextField
                    select
                    name="year"
                    value= { formData.year }
                    margin="normal"
                    variant="outlined"
                    onChange={setForm}
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}   
                    >
                {years.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                </TextField>
                <CustomTypography component="h5" variant="h5" >
                    Major/Intended Major
                </CustomTypography>
                <TextField
                    placeholder = "E.g. Bioengineering"
                    onChange={setForm}
                    name="major"
                    value={ formData.major }
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    required
                    id="standard-required"
                    label = "Required"
                    
                />
                <CustomTypography component="h5" variant="h5" >
                    University of Washington Campus
                </CustomTypography>
                <TextField
                    select
                    name="campus"
                    value= { formData.campus }
                    margin="normal"
                    variant="outlined"
                    onChange={setForm}
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}   
                    >
                {campuses.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                </TextField>
           
            <ColorButton variant = "outlined" onClick={navigation.next}> Next </ColorButton>
        </div>
        </div>
    )
}