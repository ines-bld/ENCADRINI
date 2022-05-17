import React from 'react'
import './ViewMyTheme.css'
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const ViewMyTheme = () => {
  const {themeId} = useParams();
  const [theme, setTheme] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getTheme = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3000
      /mesthemes/${themeId}`)
      setTheme(await response.json());
      setLoading(false);
    }
    getTheme();
  }, []);

  const Loading = () => {
    return(
      <>
          Loading....
      </>
    )
  }
  
  const ShowTheme = () => {
    return(
      <>
         <div className='mainContainer'>
    <div className='title'>Titre</div>
    <div className="elementContainer Regular">{themeId}</div>
    <div className='title'>Promotion</div>
    <div className="elementContainer Regular">1CS</div>
    <div className='title'>Résumé</div>
    <div className="elementContainer Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    <div className='title'>outils</div>
    <div className='Regular'>Non Valide</div>
    </div>
      </>
    )
  }
  return (
    <div className='row'>
    {<ShowTheme/>}
    </div>
  )
}

export default ViewMyTheme