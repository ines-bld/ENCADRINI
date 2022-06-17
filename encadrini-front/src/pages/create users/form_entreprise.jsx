import React from "react";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";

const form_entreprise = () => {
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
            <form action="/create" method="POST">
              <div className="formInput">
                <label>Nom</label>
                <input required type="text" placeholder="emerald's" />
              </div>
              <div className="formInput">
                <label>Adresse</label>
                <input
                  required
                  type="text"
                  placeholder="sidi bel abbes algerie"
                />
              </div>
              <div className="formInput">
                <label>telephone</label>
                <input required type="text" placeholder="046983472" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  required
                  type="mail"
                  placeholder="emeralds22@gmail.com"
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input required type="text" placeholder="bla bla bla" />
              </div>
              <button type="button">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form_entreprise;
