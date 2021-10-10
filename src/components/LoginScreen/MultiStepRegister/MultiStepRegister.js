import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import { GenInfo } from './StepForms/GenInfo.js';
import { TechSkills } from './StepForms/TechSkills.js';
import { ProjInterests } from './StepForms/ProjInterests.js';
import { Review } from './StepForms/Review.js';
import { Resume } from './StepForms/Resume.js';
import { StartPage } from '../StartPage.js';
import { EndPage } from '../EndPage.js';

const defaultData = {
    name: "",
    year: "",
    major: "",
    campus: "",

};

const steps = [
    {id: "start"},
    {id: 'general_info'},
    {id: 'project_interests'},
    {id: 'tech_skills'},
    {id: 'resume'},
    {id: 'review'},
    {id: 'end'},
];

function MultiStepRegister() {

    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    const props = { formData, setForm, navigation }
    switch (step.id) {
        case 'start':
            return <StartPage { ...props }/>
        case 'general_info':
            return <GenInfo { ...props }/>
        case 'project_interests':
            return <ProjInterests { ...props } />
        case 'tech_skills':
            return <TechSkills { ...props } />
        case 'resume':
            return <Resume { ...props } />
        case 'review':
            return <Review { ...props } />
        case 'end':
            return <EndPage {...props} />
    }

}

export default MultiStepRegister;
