import React, { Component } from 'react';
import Clock from './Clock';
// import User from './User';
// import UserClass from './UserClass';
import './App.css';
import Employee from './Employee';
import {Button, Progress} from 'reactstrap';
import Post from './Post';


class App extends Component {	
  state = {
    Employees : [
      {id: 100, name: 'Thor', email: 'abc@thor.com'},
      {id: 101, name: 'Shaktiman', email: 'abcd@sjaktiman.com'},
      {id: 102, name: 'Captain Marvel', email: 'abc@marvel,com'}
    ]
  }		

  SubmitHandler = (e) => {
    e.preventDefault();
    alert(this.refs.txtFname.value);
  }

  changeHandler(){

  }

  render() {

    const currCity = 'Bangalore';

      return (
      <div className='App'>
          <Post></Post>
          <Clock></Clock>
          <form onSUbmit={this.onSubmitHandler}>


              First Name: <input type='text' 
              name='txtFname' value={this.state.Employees[0].name} onChange={this.SubmitHandler }/>
              <input type='Submit' value='Submit'/>
          </form>
          <br></br>

          <Progress value='67' color="success">
          Completed
          </Progress>
          <br/>
          <Button color="success" align='center'>
          Submit
          </Button>
          <br/>
          <br/>
          {this.state.Employees.map(employee => {
          return (<Employee name={employee.name} email={employee.email} key={employee.id}> </Employee>)
      })}
      </div>)
    }
}

export default App;