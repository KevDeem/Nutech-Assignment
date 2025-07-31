import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router';
import Transaction from './Pages/Transaction';
import Login from './Pages/Login';
import  Register  from './Pages/Register';
import Profile from './Pages/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
