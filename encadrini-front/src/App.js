import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home page';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword';
import { ForgottenPassword } from './pages/ForgottenPassword';
import { EnterCode } from './pages/EnterCode';
import Form_enseignant from './pages/create users/form_enseignant';
import { enseignantInputs, entrepriseInputs } from "./components/formInputs";
import Login from './components/Login/Login.js';
import  Hello  from './pages/Hello';
import List from './pages/list/List';
import SingleUser from './pages/SingleUser/SingleUser';
import ErrorPage from './pages/Error page/ErrorPage';
import React from 'react';
import ThemeDepose from './pages/AdminThemes/ThemeDepose';
import ThemeInfo from './pages/AdminThemes/ThemeInfo';

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
          <Route path="gestionDsComptes"> 
            <Route index element={<List />}/>
            <Route path=':compteId' element={<SingleUser/>}/>
          </Route>
          <Route path="signin" element={<Hello /> } /> 
          <Route path="login" element={<Login /> } />
          <Route path="themedeposes">
            <Route index element={<ThemeDepose />}/>
            <Route path=":themeId" element={<ThemeInfo />}/>
          </Route>

          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </Router>

  );
}
export default App;
