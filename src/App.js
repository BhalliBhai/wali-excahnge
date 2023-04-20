import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/login-signup/login.component';
import Signup from "./components/login-signup/signup.component"
import Disclaimer from './pages/Disclaimer';
import Deposit from './components/deposit-withdraw/Deposit';
import Withdraw from './components/deposit-withdraw/Withdraw';
import Help from './components/deposit-withdraw/Help';
import Plans from './components/Plans/Plans';
import DepositProof from './components/deposit-withdraw/DepositProof';
import History from './components/deposit-withdraw/History';


function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sign-in" element={<Login/>} />
         <Route path="/sign-up" element={<Signup/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path='/disclaimer' element={ <Disclaimer/> }/>
         <Route path='/deposit' element={ <Deposit/> } />
         <Route path='/deposit-proof' element={ <DepositProof/> } />
         <Route path='/withdraw' element={ <Withdraw/> } /> 
         <Route path='/help' element={<Help/>} />
         <Route path='/plans' element={ <Plans/> } />
         <Route path='/history' element={ <History/> } />
         </Routes>      
        
      </BrowserRouter>
    </>
  );
}

export default App;
