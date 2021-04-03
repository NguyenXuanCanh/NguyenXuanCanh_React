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
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapLayoutWithMap from './RenderWithMap/BaiTapLayoutMap.js/BaiTapLayoutWithMap';
import DanhSachSanPhamProps from './Components/Props/DemoProps/DanhSachSanPhamProps';
import HomeScreen from './Components/MyPersonalWebsite/HomeScreen';
import Products from './Components/Props/BTProps/Products';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux';
import BaiTapLayoutGlasses from './Components/BaiTapLayoutGlasses/BaiTapLayoutGlasses';
import BaiTapDatVe from './redux/BaiTapDatVePhim/BaiTapDatVe';
import LayoutGameTaiXiu from './redux/GameTaiXiu/LayoutGameTaiXiu';
import FormReact from './FormReact/FormReact';
import LifeCycle from './LifeCycle/LifeCycle';

function App() {
  return (
    <div className="App">
      {/* <HomeScreen></HomeScreen> */}
      {/* <BT3Layout></BT3Layout> */}
      {/* <Styles></Styles> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <StateDemo></StateDemo> */}
      {/* <BTChonXe></BTChonXe> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* <BaiTapLayoutWithMap></BaiTapLayoutWithMap> */}
      {/* <DanhSachSanPhamProps></DanhSachSanPhamProps> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <Products></Products> */}
      {/* <BTGioHangRedux></BTGioHangRedux> */}
      {/* <BaiTapLayoutGlasses></BaiTapLayoutGlasses> */}
      {/* <BaiTapDatVe></BaiTapDatVe> */}
      {/* <LayoutGameTaiXiu></LayoutGameTaiXiu> */}
      {/* <FormReact></FormReact> */}
      <LifeCycle />
    </div>
  );
}

export default App;
