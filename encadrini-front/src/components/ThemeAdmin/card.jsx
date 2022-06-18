import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = () => {
  const { promoId } = useParams();

  const [themes, setThemes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gestionDsthemes/${promoId}`)
      .then((res) => {
        console.log(res.data);
        setThemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [titre, setTitre] = useState("");


  return (
    <>
      <h1>Thèmes déposés</h1>
      <div className="themes">
        {themes.map((theme) => (
          <li>
            <div className="text">
              <h4>{theme.titre}</h4>
            </div>
            <Link to={`/gestionDsthemes/${promoId}/viewTheme/${theme.idTheme}`}>
              <button>consulter</button>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Card;
