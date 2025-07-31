import './App.css';
import Homepage from './Pages/Homepage';
import {BrowserRouter as Route,Router, Routes } from 'react-router';
import Transaction from './Pages/Transaction';
import Login from './Pages/Login';
import  Register  from './Pages/Register';
import Userprofile from './Pages/Userprofile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile' element={<Userprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
