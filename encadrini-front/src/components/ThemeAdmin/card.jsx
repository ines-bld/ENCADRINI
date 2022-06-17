import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = () => {
<<<<<<< HEAD
  const { promoId } = useParams();
  const data = [
    { id: 1, titre: "premier theme" },
    { id: 2, titre: "deuxieme theme" },
    { id: 3, titre: "troisieme theme" },
  ];
=======

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
>>>>>>> origin/master

  const [titre, setTitre] = useState("hada test ta3 titre");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res);
        setTitre(res.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
<<<<<<< HEAD
      <h1>Theme deposes</h1>
=======
      <h1>Thèmes déposés</h1>
>>>>>>> origin/master
      <div className="themes">
        {themes.map((theme) => (
          <li>
            <div className="text">
<<<<<<< HEAD
              <h4>{titre}</h4>
            </div>
            <Link to={`/themedeposes/${promoId}/${theme.id}`}>
              <button>consulter</button>
=======
              <h4>{theme.titre}</h4>
            </div>
            <Link to={`/gestionDsthemes/${promoId}/viewTheme/${theme.idTheme}`}>
              <button >consulter</button>
>>>>>>> origin/master
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Card;

