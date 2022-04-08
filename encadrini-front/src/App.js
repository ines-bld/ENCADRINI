import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
           <Route index element={<Home/>} />
           <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
