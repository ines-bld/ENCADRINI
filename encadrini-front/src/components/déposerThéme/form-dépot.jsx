import React, { Component, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
//import UploadFiles from '../uploadFiles/uploadFiles';
import "./form-dépot.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import DropFileInput from "../uploadFiles/DropFileInput";

const animatedComponents = makeAnimated();

//import MultiSelectDropdown from './MultiSelectDropdown';

const currencies = [
  {
    value: "1CPI",
    label: "1CPI",
  },
  {
    value: "2CPI",
    label: "2CPI",
  },
  {
    value: "1SC",
    label: "1SC",
  },
  {
    value: "2SC",
    label: "2CS",
  },
  {
    value: "3SC",
    label: "3SC",
  },
];

const FormDepot = () => {
  const [outil, setOutil] = useState();
  const [outils, setOutils] = useState();
  const [encadrant, setEncadrant] = useState();
  const [encadrants, setEncadrants] = useState();
  const [idTheme, setIdtheme] = useState();
  const [idPromo, setIdpromo] = useState();
  const [data, setData] = useState([]);
  const [iduser, setIduser] = useState();
  //const [file,setFile]=    useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setData(data);
      setIduser(data.idUser);
    }
  }, []);
  //console.log(outil)

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

  const apiget_encadrant = "http://localhost:5000/get_encadrant";
  useEffect(() => {
    const getEncadrants = async () => {
      const { data: res } = await axios.get(apiget_encadrant);
      console.log(res);
      const encadrantResponse = res.map((resp) => ({
        value: resp.idUser,
        label: resp.nom + " " + resp.prenom,
      }));

      setEncadrants(encadrantResponse);
    };
    getEncadrants();
  }, []);

  const selectEncadrant = (e) => {
    setEncadrant(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  /********************************************** */

  const apiget_outils = "http://localhost:5000/get_outils";
  useEffect(() => {
    const getOutil = async () => {
      const { data: res } = await axios.get(apiget_outils);
      console.log(res);
      const outilResponse = res.map((resp) => ({
        value: resp.idOutil,
        label: resp.name,
      }));
      setOutils(outilResponse);
    };
    getOutil();
  }, []);

  const selectOutil = (e) => {
    setOutil(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const [name, setFilename] = useState();
  const [fileList, setFilelist] = useState();
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const onFileChange = (files) => {
    console.log(files[0].name);
    // const filename=files[0].name;
    setFilename(files[0].name);
    setFilelist(files[0]);
  };

  const [titre, setTitre] = useState();
  const [resume, setResume] = useState();

  const depot = (event) => {
    console.log("inside axios");
    const idProf = encadrant[0];
    console.log("hadi id prof ", idProf);
    console.log("randooooooom");
    const idOutil = outil[0];
    const data = new FormData();
    data.append("name", name);
    data.append("file", fileList);

    console.log("idprof", idProf);
    console.log("outil", outil);
    console.log("name", name);
    console.log("fileeeee", fileList);

    axios
      .post(`http://localhost:5000/add-theme/${iduser}`, {
        idPromo: setPromo(idPromo),
        idTheme: idTheme,
        titre: titre,
        idProf: iduser,
        idcoencadrant: idProf,
        resume: resume,
        idOutil: idOutil,
        fileList: fileList,
        name: name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        className="Depot"
      >
        {" "}
        <h2 className="header">Ajouter un fichier</h2>
        <DropFileInput onFileChange={(files) => onFileChange(files)} />
        <TextField
          id="standard-basic"
          label="Promotion"
          variant="standard"
          name="id"
          onChange={(e) => {
            setIdpromo(e.target.value);
          }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="ID Theme"
          variant="standard"
          name="id"
          onChange={(e) => {
            setIdtheme(e.target.value);
          }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Titre"
          variant="standard"
          name="title"
          onChange={(e) => {
            setTitre(e.target.value);
          }}
        />
        <br />
        <Select
          className="multiselect"
          placeholder="co-ecadrants"
          name="coencadreur"
          options={encadrants}
          onChange={selectEncadrant}
          isMulti
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          onChange={(e) => {
            setResume(e.target.value);
          }}
        />
        <br />
        <Select
          className="multiselect"
          placeholder="outils"
          name="coencadreur"
          options={outils}
          onChange={selectOutil}
          isMulti
        />
        <br />
        <br />
        <button
          type="button"
          className="btndepot"
          onClick={() => {
            depot();
            window.location.reload(false);
          }}
        >
          Déposer
        </button>
      </Box>
    </div>
  );
};

export default FormDepot;
