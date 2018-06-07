import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import axios from 'axios';
import qs from 'qs'

class FormInstance extends Component {
  constructor(context){
    super(context)
    this.state={
      name:'',
      email:'',
      username:'',
      message:'',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }
  async handleSubmit(e){
    e.preventDefault()
    alert('Your message has been submitted Dear ' + this.state.name)
    const myData = {
      name: this.state.name,
      email: this.state.email,
      username:this.state.username,
      message: this.state.message
    }
    console.log(myData)
    console.log(qs.stringify(myData))
    const form =await axios.post('http://localhost:3001/api/form',qs.stringify(myData))
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    })
    .then(
      this.setState({
        name: '',
        email: '',
        username:'',
        message: ''
      })
    )
  }
  render() {
    return (
      <form  onSubmit={this.handleSubmit} style={{width:'600px'}}>
          <FormGroup >
            <Label for="name" >Company Name:</Label>
            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          </FormGroup>
          <FormGroup >
            <Label for="username" >User Name:</Label>
            <Input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          </FormGroup>
          <FormGroup >
            <Label for="email" >Email:</Label>
            <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
          </FormGroup>
          <FormGroup >
            <Label for="message" >Message:</Label>
            <Input type="textarea" name="message" onChange={this.handleChange} value={this.state.message} />
          </FormGroup>
          <button>Submit</button>
      </form>
    );
  }

}

export default FormInstance;
