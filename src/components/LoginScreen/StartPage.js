import React from 'react';
import "./StartPage.css";

export const StartPage = ({ formData, setForm, navigation }) => {
    return (
        <div className = "Start_content">
            <div className = "Start_centered">
                <p className = "Start_txt"> <b>NOTE:</b> As you go through the sign up process, please keep in mind not all of the sections are required. Once you complete the process, you can fill out the sections you skipped in your profile page. </p>
                <div className = 'Start_btn' onClick={navigation.next}>Start</div>
            </div>
        </div>
    )
}

