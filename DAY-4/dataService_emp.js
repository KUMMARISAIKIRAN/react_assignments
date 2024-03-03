import axios from "axios";

export let dataServiceObj1={
    getAllEmployees,
    addEmp,
    deleteEmp,
    getEmpById,
    updateEmp
};

let url="http://localhost:3500/emps/"

function getAllEmployees(){
    return axios.get(url);

}
function addEmp(empObj){
    return axios.post(url,empObj);
}

function deleteEmp(empno){
    return axios.delete(url+empno);
}
function getEmpById(empno){
 return axios.get(url+empno);
}
function updateEmp(empno,empObj){
    return axios.put(url+empno,empObj);
}