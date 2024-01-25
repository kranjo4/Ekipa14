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
import EditMera from './pages/EditMera';
import Treningi from './pages/Trening';
import NovTrening from './pages/NovTrening';
import MailPage from './pages/MailPage';
import PDF from './pages/pdf';


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
          <Route path='/EditMera/:id' element={<EditMera />}></Route>
          <Route path="/treningi" element={<Treningi/>}></Route>
          <Route path="/novTrening/:id" element={<NovTrening/>}></Route>
          <Route path="/mailPage" element={<MailPage/>}></Route>
          <Route path="/pdf" element={<PDF/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

