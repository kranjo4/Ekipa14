import React from 'react';
import './components/css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/js/Navbar';
import Crud from './pages/Crud'; 
//tuki mi ni jasn zaka meče error ampak dela tak da to pust
import Index from './pages/Index';
import Registration from './pages/Registration'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          
          <Route path="/crud" element={<Crud />} />
          <Route path="/index" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

