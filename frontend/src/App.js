import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import EditEntry from './components/EditEntry';
import AddEntry from './components/AddEntry';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/edit/:id" element={<EditEntry />} />
        <Route path="/Add" element={<AddEntry />} />
        <Route path="/Login" element={<LoginPage/>}/>
        </Routes>
      <ToastContainer />
    </div>
  </Router></>
    
  );
}

export default App;
