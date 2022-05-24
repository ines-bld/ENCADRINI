import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React from "react";


const Form_utilisateur = ({ inputs, title }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <UploadExcel />
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    required
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button className="formUser" type="submit" >Confirm</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Form_utilisateur;
