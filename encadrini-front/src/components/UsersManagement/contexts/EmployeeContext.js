
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  console.log(EmployeeContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("inside use effect");

    axios
      .get("http://localhost:5000/gestionDsComptes")
      .then(({ data }) => {
        setEmployees(data);
        //   setEmployees(JSON.parse(localStorage.getItem('employees')))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // setEmployees(JSON.parse(localStorage.getItem('employees')))

  const sortedEmployees = employees.sort((a, b) => (a.nom < b.nom ? -1 : 1));

  const addEmployee = (nom, prenom, email, adresse, phone, statut) => {
    setEmployees([
      ...employees,
      { id: uuidv4(), nom, prenom, email, adresse, phone, statut },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
export default EmployeeContextProvider;


