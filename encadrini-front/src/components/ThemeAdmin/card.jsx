import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = () => {
  const { promoId } = useParams();
  const data = [
    { id: 1, titre: "premier theme" },
    { id: 2, titre: "deuxieme theme" },
    { id: 3, titre: "troisieme theme" },
  ];

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
      <h1>Theme deposes</h1>
      <div className="themes">
        {data.map((theme) => (
          <li>
            <div className="text">
              <h4>{titre}</h4>
            </div>
            <Link to={`/themedeposes/${promoId}/${theme.id}`}>
              <button>consulter</button>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Card;
