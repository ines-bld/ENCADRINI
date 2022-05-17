import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';


export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {
    console.log(EmployeeContext)
    const [employees, setEmployees] = useState([
        {id:uuidv4(), Nom: 'Thomas',Prénom: 'Hardy10', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222',statut:'active'},
        {id:uuidv4(), Nom: 'Dominique',Prénom:'Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735',statut:'active'},
        {id:uuidv4(), Nom: 'Maria Anders' ,Prénom:'Perrier', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931',statut:'inactive'},
        {id:uuidv4(), Nom: 'Fran Wilson',Prénom:'Perrier', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731',statut:'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut:'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut:'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut:'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut:'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'inactive'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'active'},
        {id:uuidv4(), Nom: 'Martin Blank',Prénom:'Perrier', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097',statut: 'inactive'}
])



useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees.sort((a,b)=>(a.Nom < b.Nom ? -1 : 1));



const addEmployee = (Nom, Prénom, email, address, phone, statut) => {
    setEmployees([...employees , {id:uuidv4(), Nom, Prénom, email, address, phone, statut}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContextProvider;