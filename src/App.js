import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import DialogsContainer from './Component/Dialogs/DialogsContainer';
import Music from './Component/Music/Music'
import Settings from './Component/Settings/Settings'
import News from './Component/News/News'
import { Route, BrowserRouter } from 'react-router-dom';



function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/Profile' render={() => <Profile  />} />
        <Route path='/Dialogs' render={() => <DialogsContainer  />} />
        <Route path='/News' render={() => <News />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;

