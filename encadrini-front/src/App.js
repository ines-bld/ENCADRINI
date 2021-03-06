import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home page';
import Dashboard from './pages/dashboard/dashboard';
import { ResetPassword } from './pages/ForgetPassword/ResetPassword';
import { ForgottenPassword } from './pages/ForgetPassword/ForgottenPassword';
import { EnterCode } from './pages/ForgetPassword/EnterCode';
import Form_utilisateur from './pages/create users/form_utilisateur';
import Form_entreprise from './pages/create users/form_entreprise';
import Login from './components/Login/Login.jsx';
import  Hello  from './pages/Hello';
import List from './pages/list/List';
import SingleUser from './pages/SingleUser/SingleUser';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import React from 'react';
import ThemeDepose from './pages/AdminThemes/ThemeDepose';
import ThemeInfo from './pages/AdminThemes/ThemeInfo';
import PromoTheme from './pages/AdminThemes/PromoTheme'
import Profile from './components/profiles/Profile';
import MesThemesPage from './pages/Mesthemes/MesThemesPage';
import CreationDesComptes from './pages/create users/creation_des_comptes';
import Depot from './pages/DepotUtilisateur/depotTheme';
import EnseignantHome from './pages/Enseignant/EnseignantHome';
import EtudiantHome from './pages/Etudiant/EtudiantHome';
import Equipe from './pages/Equipe/equipe';
import AdminThemeValide from './pages/UserThemes/AdminThemeValide';
import EnseignantThemeValide from './pages/UserThemes/EnseignantThemeValide';
import PromoEquipe from './pages/Equipe/promoEquipe';
import RemplirFiche from './components/fiche-de-voeux/remplir/remplir-fiche';
import EtudiantThemeValide from './pages/UserThemes/EtudiantThemeValide';
import EnseignantProfile from './components/profiles/EnseignantProfile';
import EtudiantProfile from './components/profiles/EtudiantProfile';
import Voeux from './components/fiche-de-voeux/mes-voeux/mes-voeux';
import ResultatAdmin from './components/fiche-de-voeux/resultatAdmin/resultatAdmin';
import TeamsPage from './pages/TeamsList/TeamsList';
import AfficherTeam from './pages/TeamsList/AfficherTeam'
import ViewMyTheme from './pages/ViewMyThemePage/ViewMyTheme';
import AffectationG from './pages/Equipe/affectationG';


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
          <Route index element={<CreationDesComptes />}/>
          <Route path=":role"
                element={<Form_utilisateur />}
              />
          <Route path=":role"
                element={<Form_utilisateur />}
              />
           <Route
                path="entreprise"
                element={<Form_entreprise />}
              />
          </Route>
          <Route path="gestionDsComptes"> 
            <Route index element={<List />}/>
            <Route path='viewuser/:compteId' element={<SingleUser/>}/>
          </Route>
          <Route path="Profile" element={<Profile /> }/>  
          <Route path="signin" element={<Hello /> } /> 
          <Route path="login" element={<Login /> } />
          <Route path="gestionDsthemes">
          <Route index element={<PromoTheme /> }/>
          <Route path=":promoId">
            <Route index element={<ThemeDepose />}/>
            <Route path="viewTheme/:themeId" element={<ThemeInfo />}/>
          </Route>
          </Route>
          <Route path="MesThemes/:iduser">
            <Route index element={<MesThemesPage />}/>
            <Route path=":themeId" element={<ViewMyTheme />}/>
          </Route>
          <Route path="depot" element={<Depot />} />
          <Route path="enseignantDashboard" element={<EnseignantHome />} />
          <Route path="etudiantDashboard" element={<EtudiantHome />} />
          <Route path="saisirEquipe">
          <Route index element={<PromoEquipe /> }/>
          <Route path=":promoId" element={<Equipe />} />
          </Route>
          <Route path="fichedevoeux" element={<RemplirFiche />} />
          <Route path="adminThemeValide" element={<AdminThemeValide />} />
          <Route path="enseignantThemeValide" element={<EnseignantThemeValide />} />
          <Route path="etudiantThemeValide" element={<EtudiantThemeValide />} />
          <Route path="adminProfile" element={<Profile />} />
          <Route path="etudiantProfile" element={<EtudiantProfile />} />
          <Route path="enseignantProfile" element={<EnseignantProfile />} />
          <Route path="affichervoeux" element={<Voeux />} />
          <Route path="resultatvoeux" element={<ResultatAdmin />} />
          <Route path="affectation" element={<AffectationG />} />
          <Route path="teams">
          <Route index element={<TeamsPage/>}/>
          <Route path=":teamId" element={<AfficherTeam/>} />
          </Route>
          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </Router>

  );
}
export default App;
