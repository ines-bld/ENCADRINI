import { Form, Button } from "react-bootstrap";
import { ThemeContext } from "./ThemesContext";
import { useContext, useState } from "react";
import React from "react";
import "./MesThemes.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditTheme = ({ theme }) => {
  const id = theme.idTheme;

  const history = useNavigate();

  const [Titre, setTitre] = useState(theme.titre);
  const [Promotion, setPromotion] = useState(getPromo(theme));
  const [resume, setresume] = useState(theme.resume);

  const { updateTheme } = useContext(ThemeContext);

  const updatedTheme = { id, Titre, Promotion, resume };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTheme(id, updatedTheme);
  };

  const updateThemeinfo = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/ih/mmesthemes/${id}`, {
      titre: Titre,
      idpromotion: setPromo(Promotion),
      resume: resume,
    });
    history.push("/gestionDscomptes");
  };

  function getPromo(e) {
    let result;
    switch (e.idPromo) {
      case 1:
        result = "1CP";
        break;
      case 2:
        result = "2CP";
        break;
      case 3:
        result = "1CS";
        break;
      case 4:
        result = "2CS";
        break;
      case 5:
        result = "3CS";
        break;
      default:
        result = "";
    }
    return result;
  }

  function setPromo(e) {
    let result;
    switch (e) {
      case "1CP":
      case "1cp":
        result = "1";
        break;
      case "2CP":
      case "2cp":
        result = "2";
        break;
      case "1CS":
      case "1cs":
        result = "3";
        break;
      case "2CS":
      case "2cs":
        result = "4";
        break;
      case "3CS":
      case "3cs":
        result = "5";
        break;
      default:
        result = "";
    }
    return result;
  }

  return (
    <Form onSubmit={updateThemeinfo}>
      <b className="textHeaderForm">Informations Projet</b>
      <Form.Group className="form-field">
        <div className="textFormGroup">Titre</div>
        <Form.Control
          type="text"
          placeholder="Titre *"
          name="Titre"
          value={Titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="form-field">
        <div className="textFormGroup">Promotion</div>
        <Form.Control
          type="text"
          placeholder="Promotion *"
          name="Promotion"
          value={Promotion}
          onChange={(e) => setPromotion(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="form-field">
        <div className="textFormGroup">Résumé</div>
        <Form.Control
          type="text"
          placeholder="resume *"
          name="resume"
          value={resume}
          onChange={(e) => setresume(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Modifier
      </Button>
    </Form>
  );
};

export default EditTheme;
