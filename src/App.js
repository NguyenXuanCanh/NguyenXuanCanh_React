import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import BT3Layout from './Components/BT3Layout/BT3Layout';
// import HomeScreen from './Components/BaiTapAxios/HomeScreen.js';
import Styles from './Components/Styles/Styles.js';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import StateDemo from './Components/StateDemo/StateDemo';
import BTChonXe from './Components/StateDemo/BTChonXe';

function App() {
  return (
    <div className="App">
      {/* <HomeScreen></HomeScreen> */}
      {/* <BT3Layout></BT3Layout> */}
      {/* <Styles></Styles> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <StateDemo></StateDemo> */}
      <BTChonXe></BTChonXe>
    </div>
  );
}

export default App;
