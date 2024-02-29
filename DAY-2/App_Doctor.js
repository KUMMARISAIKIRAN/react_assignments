import React from "react"

function Doctor(){
    let doc=[
        {doctorId:10,doctorName:"Sachin",designation:"Heart Specialist",experience:24,contactNumber:9101010100},
        {doctorId:45,doctorName:"Rohit",designation:"Psychologist",experience:10,contactNumber:9202020200},
        {doctorId:93,doctorName:"Bumrah",designation:"Pediatrician",experience:4,contactNumber:9303030300},
        {doctorId:95,doctorName:"Pollard",designation:"Psychologist",experience:2,contactNumber:9405060700},
        {doctorId:63,doctorName:"Surya",designation:"Heart Specialist",experience:1,contactNumber:9567833400},
    ];
    let docObj=doc.map(i=>{
      return  <tr>
            <td>{i.doctorId}</td>
            <td>{i.doctorName}</td>
            <td>{i.designation}</td>
            <td>{i.experience}</td>
            <td>{i.contactNumber}</td>
        </tr>
    })

    return(
        <>
            <table border="2" height="100">
                <tr>
                <th>Doctor Id</th>
                <th>Doctor Name</th>
                <th>Designation</th>
                <th>Experience</th>
                <th>Contact Number</th>
                </tr>
                {docObj}
            </table>
        </>
    )
}

export default Doctor;