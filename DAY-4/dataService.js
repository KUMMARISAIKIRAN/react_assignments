import axios from 'axios';

export let dataServiceObj = 
{
    getAllDepartments,
    addDept,
    deleteDept,
    getDeptById,
    updateDept
};

let url = "http://localhost:3500/depts/";

function getAllDepartments()
{
    return axios.get(url);
}

function addDept(deptObj)
{
    return axios.post(url, deptObj);
}

function deleteDept(dno)
{
    return axios.delete(url + dno);
}

function getDeptById(dno)
{
    return axios.get(url + dno);
}

function updateDept(dno,deptObj){
    return axios.put(url+dno,deptObj);
}