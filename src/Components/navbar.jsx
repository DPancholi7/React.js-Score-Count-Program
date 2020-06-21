import React, { Component } from 'react';



class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
    <nav className="navbar navbar-light bg-light">
    <span> Total : {this.props.totalValue}</span>
    <span className="navbar-brand mb-0 h1 mx-auto">Score Count Program</span>
    <span className = "badge badge-pill badge-secondary"> 
    <span> # Of Counters : </span>{this.props.totalCounters}
    </span>
    </nav>
         );
    }
}
 
export default NavBar;