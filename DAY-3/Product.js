import { useState } from "react";


// function Product(){

//     const [name,setName]=useState("")
//     const [price,setPrice]=useState(0)
//     const [quantity,setQuanity]=useState(0)
//     const [total,setTotal]=useState(0)
//     function prodName(event){
//        setName(event.target.value);
//     }
    
//     return(
//         <>
//         Product Name <input type="text" onChange={(e)=>setName(e.target.value)}/><br/><br/>
//         Unit Price <input type="text" onChange={(e)=>setPrice(e.target.value)}/><br/><br/>
//         Quantity <input type="text" onChange={(e)=>setQuanity(e.target.value)}/><br/><br/>
//         <input type="button" onClick={()=>setTotal(price*quantity)} value="Get Total"></input>
//         <br/>
//         <p>Total Amount {total}</p>
//         </>
//     )
// }

// export default Product;


function Product(){

    const [name,setName]=useState("Printer")
    const [price,setPrice]=useState(0)
    const [quantity,setQuanity]=useState(0)
    const [total,setTotal]=useState(0)
    function prodName(event){
       setName(event.target.value);
    }
    
    function unitPrice(event){
        setPrice(event.target.value);
    }
    
    function prodQuantity(event){
         setQuanity(event.target.value);
    }
    function totalAmount(){
       setTotal(price*quantity);
    }
    return(
        <>
        Product Name <input type="text" value={name} onChange={prodName}/><br/><br/>
        Unit Price <input type="text" onChange={unitPrice}/><br/><br/>
        Quantity <input type="text" onChange={prodQuantity}/><br/><br/>
        <input type="button" onClick={totalAmount} value="Get Total"></input>
        <br/>
        <p>Total Amount {total}</p>
      
        </>
    )
}

export default Product;