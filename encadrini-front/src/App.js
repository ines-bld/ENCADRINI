import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword';
import { ForgottenPassword } from './pages/ForgottenPassword';
import { EnterCode } from './pages/EnterCode';

import  Hello  from './pages/Hello';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="forgottenPassword" element={<ForgottenPassword />} />
          <Route path="enterCode" element={<EnterCode />} />
          
          <Route path="signin" element={<Hello /> } /> 
        
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
