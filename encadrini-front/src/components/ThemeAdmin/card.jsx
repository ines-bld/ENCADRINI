import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useParams } from "react-router-dom";

const Card = () => {
  const { promoId } = useParams();
  const data = [
    { id: 1, titre: "premier theme", responsable: "bensaber" },
    { id: 2, titre: "deuxieme theme", responsable: "benslimane" },
    { id: 3, titre: "troisieme theme", responsable: "malki" },
  ];

  return (
    <>
      <h1>Theme deposes</h1>
      <div className="themes">
        {data.map((theme) => (
          <li>
            <div className="text">
              <h4>{theme.titre}</h4>
              <p>{theme.responsable}</p>
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
