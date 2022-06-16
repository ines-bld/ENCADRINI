import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./drop-file-input.css";
import { ImageConfig } from "../imageConfig";
import uploadImg from "../assets/cloud-upload-regular-240.gif";
import axios from "axios";

const DropFileInput = (props) => {

 

  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  //function uploadEx() {
   const uploadEx= event => {
    axios.defaults.withCredentials=true;
    console.log('inside');
    const data = new FormData();
    data.append("file" , fileList)
    console.log(data);

    console.log('inside');
    axios
      .post(`http://localhost:5000/creationDesUtilisateurs/uploadfile`, data , {
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
        </div>
        <input
          type="file"
          name="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          value=""
          onChange={onFileDrop}
        />
      </div
      >
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img src={ImageConfig["default"]} alt="" />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
          <button type="submit" onClick={uploadEx} >Créer</button>
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
