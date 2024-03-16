import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import VotingDashboard from './components/VotingDashboard/VotingDashboard';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/voter' element={<VotingDashboard />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
