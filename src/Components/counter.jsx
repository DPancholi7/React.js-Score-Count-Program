import React, { Component } from 'react';


class Counter extends Component {
   


    render() { 
        
        return (
         <div>
        <h4></h4>
        <h4>{this.props.counter.title}</h4>
        <span style = {{fontSize: 25}} className = {this.GetBadgeClasses()}>{ this.FormatCount()}</span>
        <button className = "btn btn-info btn-sm m-1" onClick ={()=> this.props.onIncrement(this.props.counter)}>Increase</button>
        <button className = "btn btn-info btn-sm m-1" onClick ={()=> this.props.onDecrement(this.props.counter)}>Decrease</button>
        <button className = "btn btn-warning btn-sm m-1" onClick ={()=> this.props.onRename(this.props.counter)}>Rename</button>
        <button className = "btn btn-danger btn-sm m-1" onClick ={() => this.props.onDelete(this.props.counter.id)}>Remove</button>

        
       
        </div>
        );
    }

    GetBadgeClasses() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "light";
        }
        else {

            classes += "light";
        }
        return classes;
    }

    FormatCount()  {
        
        if (this.props.counter.value === 0) {

            return "0";
        }
        else {
            return this.props.counter.value;
        }

    }


    

    
    
}
 
export default Counter;