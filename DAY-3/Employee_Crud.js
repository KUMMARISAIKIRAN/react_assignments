import { useState } from "react";

function Employee() {
    const [empArray, setEmpArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmpClick() {
        let data = [
            { empno: 1, ename: "Scott", job: "Accountant", sal: 100000, deptno: 101 },
            { empno: 2, ename: "Kooper", job: "Audit Consultant", sal: 200000, deptno: 102 },
            { empno: 3, ename: "Miller", job: "Marketing Analyst", sal: 300000, deptno: 103 },
            { empno: 4, ename: "Jofra", job: "Consultant", sal: 200000, deptno: 104 },
            { empno: 5, ename: "Russell", job: "Data Analyst", sal: 300000, deptno: 105 },
        ];

        setEmpArray(data);

    }

    function addEmpClick() {
        let empObj = []
        empObj.empno = empno
        empObj.ename = ename
        empObj.job = job
        empObj.sal = sal
        empObj.deptno = deptno

        let temp = [...empArray]
        temp.push(empObj)
        setEmpArray(temp)
        clearFields()
    }
    function clearFields() {
        setEmpno("")
        setEname("")
        setJob("")
        setSal("")
        setDeptno("")
    }
    function deleteEmp(n) {
        let tempArray = [...empArray]
        let index = tempArray.findIndex(item => item.empno == n);
        tempArray.splice(index, 1)
        setEmpArray(tempArray)
    }
    function selectEmp(n) {
        let tempArray = empArray.find(item => item.empno == n);
        setEmpno(tempArray.empno);
        setEname(tempArray.ename);
        setJob(tempArray.job);
        setSal(tempArray.sal);
        setDeptno(tempArray.deptno);

    }
    function updateEmpClick() {
        let tempArray = [...empArray]
        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename;
        tempArray[index].job = job;
        tempArray[index].sal = sal;
        tempArray[index].deptno = deptno;

        setEmpArray(tempArray);

        clearFields();
    }
    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td><a><img width="40px" src="./images/dl.png" onClick={() => deleteEmp(item.empno)}/></a>
                <a><img width="40px"onClick={() => selectEmp(item.empno)} src="./images/sl.png"/></a></td>
        </tr>
    })
    return (
        <>
            <h3>CRUD Operations on Employee Data</h3><hr />

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

export default Employee