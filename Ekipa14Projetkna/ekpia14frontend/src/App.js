import React from 'react';
import './components/css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/js/Navbar';
import Crud from './pages/Crud'; 
//tuki mi ni jasn zaka meče error ampak dela tak da to pust
import Index from './pages/Index';
import Registration from './pages/Registration'
import Prijava from './pages/Prijava'
import Mere from './pages/Mere'
import EditUporabnik from './pages/EditUporabnik'
import NovaMera from './pages/NovaMera';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          
          <Route path="/crud" element={<Crud />} />
          <Route path="/index" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/prijava" element={<Prijava />} />
          <Route path="/mere" element={<Mere />} />
          <Route path="/edituser/:id" element={<EditUporabnik />} />
          <Route path='/novaMera/:id' element={<NovaMera />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

