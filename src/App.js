import React from "react";
import "./App.css";
import About from "./components/about";
import BannerContent from "./components/bannerContent";
import DigitalProduct from "./components/digitalProduct";
import FooterTop from "./components/footerTop";
import Headernav from "./components/headernav";
import MyAvatar from "./components/myAvatar";
import Portfolio from "./components/portfolio";
import SideBar from "./components/sideBar";
import Skills from "./components/skills";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className="top-section">
            <header className="App-header">
              <Headernav></Headernav>
            </header>
            <div className="side-bar-container">
              <SideBar></SideBar>
            </div>
            <BannerContent></BannerContent>
            <MyAvatar></MyAvatar>
          </div>
          <div className="main">
            <Portfolio></Portfolio>
            <Skills></Skills>
            <DigitalProduct></DigitalProduct>
            <About></About>
          </div>
          <footer>
            <FooterTop></FooterTop>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
