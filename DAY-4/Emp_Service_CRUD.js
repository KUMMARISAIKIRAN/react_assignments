import { useState } from "react";
import { dataServiceObj1 } from "../services/dataService_emp";

function EmpList(){
    const [empArray, setEmpArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

   
    function getEmpClick() {
        
        dataServiceObj1.getAllEmployees().then(resData => 
            {
               setEmpArray(resData.data);
            });

    }

    function addEmpClick()
    {
        let empObj = {}
        empObj.empno = empno
        empObj.ename = ename
        empObj.job = job
        empObj.sal = sal
        empObj.deptno = deptno

        dataServiceObj1.addEmp(empObj).then(resData =>
            {
                alert("New Dept Added to server");
                getEmpClick();
                clearFields();
            }); 
    }

    function clearFields() {
        setEmpno("")
        setEname("")
        setJob("")
        setSal("")
        setDeptno("")
    }


    function  deleteClick(empno)
    {
       dataServiceObj1.deleteEmp(empno).then(resData => 
        {
            alert("Dept deleted from server");
            getEmpClick();            
        });
    }

    function  selectEmpClick(empno)
    {
        dataServiceObj1.getEmpById(empno).then(resData => 
        {
            let empObj =  resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        }); 
   
    }


    function  updateEmpClick()
    {
        let empObj = {}
        empObj.empno = empno
        empObj.ename = ename
        empObj.job = job
        empObj.sal = sal
        empObj.deptno = deptno
        dataServiceObj1.updateEmp(empno,empObj).then(resData =>
            {
                alert("Emp is Updated to server");
                getEmpClick();
                clearFields();
            }); 
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td><a><img width="40px" src="./images/dl.png" onClick={() => deleteClick(item.empno)}/></a>
                <a><img width="40px"onClick={() => selectEmpClick(item.empno)} src="./images/sl.png"/></a></td>
        </tr>
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            Employee Id <input placeholder="Employee Id" type="text" value={empno} onChange={(e) => setEmpno(e.target.value)} /><br /><br />
            Employee Name <input placeholder="Employee Name" type="text" value={ename} onChange={(e) => setEname(e.target.value)} /><br /><br />
            Employee Job <input placeholder="Employee Job" type="text" value={job} onChange={(e) => setJob(e.target.value)} /><br /><br />
            Employee Salary <input placeholder="Employee Salary" type="text" value={sal} onChange={(e) => setSal(e.target.value)} /><br /><br />
            Employee Department Number <input placeholder="Employee Department Number" type="text" value={deptno} onChange={(e) => setDeptno(e.target.value)} /><br /><br />
            <input type="button" value="Get Employees" onClick={getEmpClick} />
            <input type="button" value="Add Employee" onClick={addEmpClick} />
            <input type="button" value="Update Employee" onClick={updateEmpClick} />
            <table border="2" width="500">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Job</th>
                    <th>Employee Salary</th>
                    <th>Employee DeptNo</th>
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    )
}

export default EmpList;