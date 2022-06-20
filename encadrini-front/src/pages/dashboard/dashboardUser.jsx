import "./dashboardUser.css";
import React, { useEffect, useState } from "react";
import studentAnimation from "../../images/animation_500_l4j83hiw.gif";

const HomeUser = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setName(data.nom);
    }
  }, []);
  return (
    <div className="widgets-students">
      <div className="widget-student">
        <p className="text-bienvenue">
          Bienvenue {name}, à Encadrini
          <br />
          <p className="text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit cillum dol.
          </p>
        </p>
        <p></p>
        <img className="studentAnimation" src={studentAnimation} />
      </div>
    </div>
  );
};

export default HomeUser;
