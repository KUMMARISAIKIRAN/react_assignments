import { useState } from "react";



function Event() {

    function f1() {
        alert("Hello")
    }
    function f2(n) {
        alert("Hello AP Welcome JSP " + n)
    }
const [count, setCount] = useState(1);
    function upc() {

        
        setCount(count + 1)
        alert(count);
    }

    let numbers=[1,2,3];
    let nC=[...numbers];

    return (
        <>
            <h1>Event Handling in React JS</h1>
            <hr />
            <button onClick={() => { f2(2024); }}>Click</button>
            <br />
            <h3>Count {count}</h3>
            <button onClick={upc}>Update</button>
            <h1>{nC}</h1>
        </>
    )
}
export default Event