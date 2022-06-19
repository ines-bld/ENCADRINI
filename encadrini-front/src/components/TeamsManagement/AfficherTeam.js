import React from 'react'
import { useParams } from 'react-router-dom';
import {Dropdown, DropdownType, DropdownButton, SplitButton, ButtonGroup } from 'react-bootstrap';
import './Teams.css'

const AfficherTeam = () => {
    const {themeId} = useParams();
  return (
    <div>
    <div className='title-equipe'>Numéro de l'équipe</div>
    <div className="elementContainer Regular">{themeId}</div>
    <div className='title-equipe'>encadrant</div>
    <div className="elementContainer Regular">1CS</div>
    <div className='title-equipe'>Thème</div>
    <div className="elementContainer Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    <div className='title-equipe'>Chef de l'équipe</div>
    <div className='elementContainer Regular'>Ines Belouad</div>
    <div className='title-equipe'>Les membres de l'équipe</div>
    <div className='elementContainer Regular'>Hattabi Ibtihel</div>
    <div className='elementContainer Regular'>Rihab Slimani</div>
    <div className='elementContainer Regular'>Laala Asma</div>
    <div className='elementContainer Regular'>Oukrif Sabrina</div>
    <div className='elementContainer Regular'>Baha Meriem</div>
    </div>
  )
}

export default AfficherTeam