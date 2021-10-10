import { useState } from 'react';
import StartPage from './components/LoginScreen/StartPage.js'
import React from 'react';
import MultiStepRegister from './components/LoginScreen/MultiStepRegister/MultiStepRegister.js'
import Header  from './components/Navigation/Header.js'
import MainPage from './components/Home/MainPage.js'
import Login from './components/LoginScreen/LoginMain/Login.js'
import HomePage from './components/Home/HomePage.js'

function App() {
  return (
    <div>
      {/*<MultiStepRegister />/*/}
      <MainPage />
      {/*<Login />*/}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
