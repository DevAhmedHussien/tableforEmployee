import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};  
const EmployeeList = ({ employees,setEmployees}) => {
    const [Iid,setId] = useState('')
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[updatedEmployee,setUpdatedEmployee]=useState({ 
    name: '',
    surname: '',
    experience: '',
    age: '',
    address: ''
});
    //remove cell from tabel 
    const handleDelete = (d)=>{
        const employeedeleted = employees.filter((element) => element.id !== d.id);
        setEmployees(employeedeleted)
    }
     // open Modal and  get stammped id 
    const handleUpdateOpen = (d)=>{
        setId(d.id)
        setOpen(true)}
    // updating cell from table
    const handleUpdate = ()=>{
        const updatedemployee = employees.map(element=>{
            if(element.id === Iid){
            return  {...element, name :updatedEmployee.name ,
            surname:updatedEmployee.surname ,experience:updatedEmployee.experience 
            ,age:updatedEmployee.age , address:updatedEmployee.address}
            }else 
            return element;
            }) 
            setEmployees(updatedemployee)
            setUpdatedEmployee({
                name: '',
                surname: '',
                experience: '',
                age: '',
                address: ''
            })
            setOpen(false)
    }
return (
    <>
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Experience</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => (
            <tr key={index}>
            <td>{index+1}</td>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.experience}</td>
            <td>{employee.age}</td>
            <td>{employee.address}</td>
            <td>
                <button onClick={()=>{handleDelete(employee)}}>delete</button>
                <button onClick={()=>{handleUpdateOpen(employee)}}>update </button>
            </td>      
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div style={{display:'flex' , flexDirection:'column' , gap:5}} >
                    <label>
                    Name:
                    <input value={updatedEmployee.name} onChange={(e)=>{
                        setUpdatedEmployee({...updatedEmployee,name:e.target.value})
                    }}/>
                    </label>
                    <label>
                    surname:
                    <input value={updatedEmployee.surname} onChange={(e)=>{
                        setUpdatedEmployee({...updatedEmployee,surname:e.target.value})
                    }}/>
                    </label>
                    <label>
                    experience:
                    <input type='Number' value={updatedEmployee.experience} onChange={(e)=>{
                        setUpdatedEmployee({...updatedEmployee, experience:e.target.value})
                    }}/>
                    </label>
                    <label>
                    age:
                    <input type='Number'  value={updatedEmployee.age} onChange={(e)=>{
                        setUpdatedEmployee({...updatedEmployee, age:e.target.value})
                    }}/>
                    </label>
                    <label>
                    address:
                    <input value={updatedEmployee.address} onChange={(e)=>{
                        setUpdatedEmployee({...updatedEmployee,address:e.target.value})
                    }}/>
                    </label>
                    <button onClick={()=>{
                handleUpdate(employee)
                    }}>update</button>
                </div>
                </Box>
                </Modal>  
            </tr>
        ))}
        </tbody>
    </table>
    </>
);
};
export default EmployeeList;







