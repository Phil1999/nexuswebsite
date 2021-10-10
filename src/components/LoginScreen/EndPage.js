import React from 'react';
import "./StartPage.css";
import Link from '@material-ui/core/Link';

export const EndPage = ({ formData, setForm, navigation }) => {
    return (
        <div className = "Start_content">
            <div className = "Start_centered">
                <p className = "Start_txt"> Welcome <b>{ formData.name }</b>, </p>
                <p style ={{color: "black"}}>For your better experience with searching projects and team members, <br />
                <Link href = "#" underline = "none" style = {{color:"#F05A28"}}> please publish your profile. </Link> </p>
                <div className = 'Start_btn' onClick={navigation.next}>Publish Profile</div>
            </div>
        </div>
    )
}