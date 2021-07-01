import React from 'react';
import Topbar from './Components/Topbar/Topbar.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
