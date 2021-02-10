import React from 'react'
import "./source/server/db.js"

class Foodform extends React.Component{

    constructor(props){

        super(props);
        this.state = {


        }
    }

    this.onChange = this.onChange.bind(this);


    addProduct(){
        alert('product was added')
        if(//produktet alt finnes i db){

        }



    }
    render(){

        <div>
            <form onSubmit={this.addProduct}>
        	    <label>
                    Name:
                    <input type="text" value={this.state.value} />
                </label>
                <label>
                    Price: 
                    <input type="number" />

                </label>
                <label>
                    Category:
                    <select id="foodCategory">
                        <option value="meat"> Meat </option>
                        <option value="greens"> Greens </option>
                        <option value="fish"> Fish </option>
                    </select>
                </label>
            </form>
        </div>


    }
}