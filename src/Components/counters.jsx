import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
   


    render() { 
        
        return (
            <div>
                <button className = "btn btn-primary btn-sm m-2 " onClick = {this.props.onReset}> Reset Counters</button>
                <button className = "btn btn-primary btn-sm m-2 " onClick = {this.props.addCounter}> Add New Counter</button>
                <button className = "btn btn-primary btn-sm m-2 " onClick = {this.props.totalValue}> Refresh Total</button>
            {this.props.counters.map(counter => 
            <Counter 
            key ={counter.id}  
            onDelete = {this.props.onDelete} 
            onIncrement = {this.props.onIncrement}
            onDecrement = {this.props.onDecrement}
            onRename = {this.props.onRename}
            counter = {counter}>
            </Counter>
            )}

            </div>


          );
    }
}
 
export default Counters;