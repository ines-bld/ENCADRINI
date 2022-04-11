import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword';
import { ForgottenPassword } from './pages/ForgottenPassword';
import { EnterCode } from './pages/EnterCode';
import { CreationDesComptes } from './pages/CreationDesComptes';
import { PourEtudiant } from './pages/PourEtudiant';

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
<<<<<<< HEAD
          <Route path="creationDesComptes" element={<CreationDesComptes />} />
          <Route path="pourEtudiant" element={<PourEtudiant />} />
=======
          
          <Route path="signin" element={<Hello /> } /> 
        
>>>>>>> master
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
