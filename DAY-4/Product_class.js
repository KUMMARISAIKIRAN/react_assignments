import React from "react";

export class ProductC extends React.Component{
    constructor(){
        super();
        this.state={name:"",price:"",quantity:"",total:""};
this.textChange=this.textChange.bind(this)
this.totalAmount=this.totalAmount.bind(this)
    }

    textChange(e)
    {
        this.setState( { [e.target.name] :  e.target.value} );
    }
totalAmount(){
    this.setState({total:(this.state.price)*(this.state.quantity)})
}
render(){
    return(
        <>
        Product Name <input type="text" name="name" value={this.name} onChange={this.textChange}/><br/><br/>
        Unit Price <input type="text" name="price" onChange={this.textChange}/><br/><br/>
        Quantity <input type="text" name="quantity" onChange={this.textChange}/><br/><br/>
        <input type="button" onClick={this.totalAmount} value="Get Total"></input>
        <br/>
        <p>Total Amount {this.state.total}</p>
      
        </>
    )
}
}