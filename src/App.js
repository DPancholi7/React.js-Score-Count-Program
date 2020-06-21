import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './Components/navbar';
import './App.css';
import Counters from './Components/counters';
import Counter from './Components/counter';

class App extends Component {

  state = { 
    counters: [
        {id : 1, value: 0, title: "Counter" } ,
        {id : 2, value: 0, title: "Counter"},
        {id : 3, value: 0, title: "Counter"},
        {id : 4, value: 0, title: "Counter"}, 
        {id : 5, value: 0, title: "Counter"},
    ],

    Sum : 0


 }

 addCounter = () => {

  if (this.state.counters.length >= 20) {
    alert("You Reached The Limit, Maximium Of 20 Counters .");

  }
  else {

  const Counters = [...this.state.counters];
  const newCounter = {id : this.state.counters.length + 1 , value : 0, title : "Counter" };
  Counters.push(newCounter);
  this.setState({ counters : Counters});
  }
  
 }
 

 handleDelete = (CounterId) => {
    const Counters = this.state.counters.filter(counter => counter.id !== CounterId)
    this.setState({counters: Counters});
 }

 resetCounter = () => {
    const counters = this.state.counters.map(counters => {
        counters.value = 0;
         return counters}
         );
         this.setState({counters: counters});

 }
 handleIncrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index].value = counters[index].value + 1 ;
     this.setState({ counters : counters});

 }

 handleDecrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     if (counters[index].value === 0) {
        alert("Value already at 0");
     }
     else {
         counters[index].value--;
         this.setState({counters : counters});
     }


}

handleRename = (counter) => {
  let reName = prompt("Enter A Name : ");
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].title = reName;
  this.setState({ counters : counters});
 }

 getTotalValue = () => {
  const counters = [...this.state.counters];
  let sum = 0;
  for (let i = 0; i < counters.length; i++) {
    sum += counters[i].value;
  }
  this.setState({ Sum : sum});

 }
  

  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.length}
              totalValue = {this.state.Sum}/>
        <main className = "container"> 
        <Counters onReset = {this.resetCounter}
        totalValue = {this.getTotalValue}
        addCounter = {this.addCounter}
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
        onRename = {this.handleRename}
        counters = {this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
