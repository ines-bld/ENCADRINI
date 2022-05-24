import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home page';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword/ResetPassword';
import { ForgottenPassword } from './pages/ResetPassword/ForgottenPassword';
import { EnterCode } from './pages/ResetPassword/EnterCode';
import Form_utilisateur from './pages/create users/form_utilisateur';
import { utilisateurInputs, entrepriseInputs } from "./components/formInputs";
import Login from './components/Login/Login.js';
import Hello from './pages/Hello';
import List from './pages/list/List';
import Depot from './pages/déposerThéme/déposerthéme';
import SingleUser from './pages/SingleUser/SingleUser';
import { CreationDesComptes } from './pages/create users/CreationDesComptes';
import UploadFiles from './components/uploadFiles/uploadFiles';
import UploadExcel from './components/uploadExcel/uploadExcel';
import FormDepot from './components/déposerThéme/form-dépot.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import React from 'react';
import ThemeDepose from './pages/AdminThemes/ThemeDepose';
import ThemeInfo from './pages/AdminThemes/ThemeInfo';
import Profile from './components/profiles/Profile';
import MesThemesPage from './pages/Mesthemes/MesThemesPage';


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
          <Route path="creationDesUtilisateurs" >
            <Route index element={<CreationDesComptes />} />
            <Route path="enseignant"
              element={<Form_utilisateur inputs={utilisateurInputs} />}
            />
            <Route
              path="etudiant"
              element={<Form_utilisateur inputs={utilisateurInputs} />}
            />
            <Route
              path="entreprise"
              element={<Form_utilisateur inputs={entrepriseInputs} />}
            />
          </Route>
          <Route path="gestionDsComptes">
            <Route index element={<List />} />
            <Route path=':compteId' element={<SingleUser />} />
          </Route>
          <Route path="formDepot" element={<FormDepot />} />
          <Route path="signin" element={<Hello />} />
          <Route path="login" element={<Login />} />
          <Route path="uploadExcel" element={<UploadExcel />} />
          <Route path="uploadFiles" element={<UploadFiles />} />
          <Route path="depot" element={<Depot />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="MesThemes" element={<MesThemesPage />} />
          <Route path="themedeposes">
            <Route index element={<ThemeDepose />} />
            <Route path=":themeId" element={<ThemeInfo />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>

  );
}
export default App;
