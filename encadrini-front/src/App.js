import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword';
import { ForgottenPassword } from './pages/ForgottenPassword';
import { EnterCode } from './pages/EnterCode';
import Form_enseignant from './pages/create users/form_enseignant';
import { enseignantInputs, entrepriseInputs } from "./components/formInputs";


import  Hello  from './pages/Hello';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="forgottenPassword" element={<ForgottenPassword />} />
          <Route path="enterCode" element={<EnterCode />} />
          <Route path="creationDesUtilisateurs">
          <Route path="enseignant"
                element={<Form_enseignant inputs={enseignantInputs} title="Ajouter un nouveau Etudiant" />}
              />
           <Route
                path="entreprise"
                element={<Form_enseignant inputs={entrepriseInputs} title="Add New Product" />}
              />
          </Route>
          
          <Route path="signin" element={<Hello /> } /> 
        
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
