import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ResetPassword/ResetPassword';
import { ForgottenPassword } from './pages/ResetPassword/ForgottenPassword';
import { EnterCode } from './pages/ResetPassword/EnterCode';
import Form_enseignant from './pages/create users/form_enseignant';
import { enseignantInputs, entrepriseInputs } from "./components/formInputs";
import Login from './components/Login/Login.js';
import Hello from './pages/Hello';
import List from './pages/list/List';
import SingleUser from './pages/SingleUser/SingleUser';
import { CreationDesComptes } from './pages/create users/CreationDesComptes';
import UploadFiles from './components/uploadFiles/uploadFiles';
import UploadExcel from './components/uploadExcel/uploadExcel';

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
            <Route path="enseignant"
              element={<Form_enseignant inputs={enseignantInputs} />}
            />
            <Route
              path="entreprise"
              element={<Form_enseignant inputs={entrepriseInputs} />}
            />
          </Route>
          <Route path="gestionDsComptes">
            <Route index element={<List />} />
            <Route path=':compteId' element={<SingleUser />} />
          </Route>
          <Route path="signin" element={<Hello />} />
          <Route path="login" element={<Login />} />
          <Route path="uploadExcel" element={<UploadExcel />} />
          <Route path="uploadFiles" element={<UploadFiles />} />
          <Route path="creationDesComptes" element={<CreationDesComptes />} />
        </Route>
      </Routes>
    </Router>

  );
}
export default App;
