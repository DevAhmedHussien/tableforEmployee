import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import { v4 as uuidv4 } from 'uuid';
const EmployeeForm = () => {
//object for employee 
const [employee, setEmployee] = useState({
    id : uuidv4(),
    name: '',
    surname: '',
    experience: '',
    age: '',
    address: '',
});
// array that inclue all employees 
const[employees , setEmployees]= useState([])
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
};
// handle  form add employe in array after validation 
const handleSubmit = (e) => {
    e.preventDefault();
    if(employee.name.length > 0 || employee.surname.length > 0 ||
        employee.experience.length > 0 || employee.age.length > 0  || 
        employee.address.length > 0){
        setEmployees([...employees,employee])
        setEmployee({
            id : uuidv4(),
            name: '',
            surname: '',
            experience: 0,
            age: 0 ,
            address: '',
        })
    }   
};
    return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
        </label>
        <label>
        Surname:
        <input type="text" name="surname" value={employee.surname} onChange={handleInputChange} />
        </label>
        <label>
        experience:
        <input type='number'  name="experience" value={employee.experience} onChange={handleInputChange} />
        </label>
        <label>
        age:
        <input type='Number'  name="age" value={employee.age} onChange={handleInputChange} />
        </label>
        <label>
        address:
        <input type="text" name="address" value={employee.address} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
        <EmployeeList employees={employees} setEmployees={setEmployees} />
    </form>
</>
)
}    
    export default EmployeeForm;
