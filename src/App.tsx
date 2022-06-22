import React from 'react';
import LeftMain from './components/LeftMenu';
import Main from './components/Main';
import Nav from './components/Nav';
import RightMenu from './components/RightMenu';
import SideBar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav className="navigation">Nav</Nav>
      <SideBar className="sidebar">Sidebar</SideBar>
      <LeftMain className="leftmenu">Left Menu</LeftMain>
      <Main className="content">Main</Main>
      <RightMenu className="rightmenu">Right Menu</RightMenu>
    </div>
  );
}

export default App;
