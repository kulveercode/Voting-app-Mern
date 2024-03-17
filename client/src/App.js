import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import VotingDashboard from './components/VotingDashboard/VotingDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddCandidate from './components/AddCandidate/AddCandidate';
import Logout from './components/Logout';
import Result from './components/Result/Result';


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
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/addcandidate' element={<AddCandidate />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
