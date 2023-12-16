// Import necessary components and styles
import Navbar from './components/Navbar';
import Body from './components/Body';
import EditEntry from './components/EditEntry';
import AddEntry from './components/AddEntry';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/edit/:id" element={<EditEntry />} />
              <Route path="/add" element={<AddEntry />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
            <ToastContainer/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
