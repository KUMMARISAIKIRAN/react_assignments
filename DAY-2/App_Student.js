

import React from "react";

function Student() {
    let stu = { sid: 10, sname: "Sachin", course: "React", age: 22, total:200 }



    let stud =
        <>
            <tr>
                <td>ID</td>
                <td>{stu.sid}</td>
            </tr>
            <tr>
                <td>NAME</td>
                <td>{stu.sname}</td>
            </tr> <tr>
                <td>COURSE</td>
                <td>{stu.course}</td>
            </tr><tr>
                <td>AGE</td>
                <td>{stu.age}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{stu.total}</td>
            </tr>
        </>

    return (
        <>
            <table border="2" height="200">
                <tr>

                    <th>Student</th>
                    <th>Data</th>
                </tr>
                {stud}
            </table>
        </>)
}
export default Student;