import React, { useState } from 'react'


class Foodform extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            
            name:"yo ",
            category: " ", 
            price: 0

        }

        this.addProduct =this.addProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {

        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value

        });
    }
    

    addProduct = (e)=>{
        let {name,  category, price} = this.state;
        console.log(name);
        console.log(category);
        console.log(price);
        fetch('http://localhost:3001/products', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                category,
                price

            })
         }).then(response=> {
             console.log(response);

         })

        e.preventDefault();
    }

    render(){
        return(
            <div>
            <form id="foodform" onSubmit={this.addProduct}>
        	    <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    Price: 
                    <input type="number" name="price" onChange={this.handleChange} value={this.state.price}/>

                </label>
                <label>
                    Category:
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="meat"> Meat </option>
                        <option value="greens"> Greens </option>
                        <option value="fish"> Fish </option>
                    </select>
                </label>
            </form>
            <button type="submit" form="foodform" value="Submit">Submit</button>

        </div>

        );
    }
}

export default Foodform; 