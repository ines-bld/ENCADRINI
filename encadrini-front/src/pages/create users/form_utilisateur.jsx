import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import React from "react";
import UploadExcel from "../../components/uploadExcel/uploadExcel";


const Form_enseignant = ({ inputs }) => {



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="excel">
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
              <button>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_enseignant;
