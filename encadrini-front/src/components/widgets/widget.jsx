import "./widget.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';


const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "enseignant":
      data = {
        title: "ENSEIGNANT",
        link: "Voir tous les enseignants",
      };
      break;
    case "etudiant":
      data = {
        title: "ETUDIANT",
        link: "Voir tous les etudiants",
      };
      break;
    case "projet":
      data = {
        title: "PROJET",
        link: "Voir tous les projets",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
            {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
      <ArrowForwardIosIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
