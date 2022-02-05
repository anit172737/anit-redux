import React from 'react';
import './App.css';

class App extends React.Component{

  state={
    users:[],
    errors:'',
    username:'',
    name:'',
    email:''
  }

  handleFetch=()=>{
    fetch(`http://localhost:8080/api/users/`)
    .then(res => res.json())
    .then(data=>this.setState({users:data}))
    .catch(error=>this.setState({errors:error}))
  }

   handleSubmit = ()=>{
    const {username, name, email} = this.state;
    const allUser = this.state.users.map(e => e.username);
     const curUser = this.state.username;

    if(allUser.includes(curUser)){
      alert(`user is already exist!`)
    }
    else{
      fetch(`http://localhost:8080/api/users/`, {
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username, name, email})
    })}
  }

  handleUpdate=()=>{
    const {username, name, email} = this.state;
    const allUser = this.state.users.map(e => e.name);
     const curUser = this.state.name;

    if(allUser.includes(curUser)){
      fetch(`http://localhost:8080/api/users/${name}`, {
      method:'pust',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username, name, email})
    })
    }
    else{
      alert(`User doesn't exist!`)
      }
  }
  

  handleDelete=()=>{
    const {name} = this.state;
    fetch(`http://localhost:8080/api/users/${name}`,{
      method:'delete'
    })
  }

  handlChange = (e)=>{
    const nam = e.target.name;
    const val = e.target.value;
    this.setState({[nam]:val})
  }  

  componentDidMount(){
    this.handleFetch();
    console.log(this.state.users);
  }

render(){
  return (
    <form onSubmit={this.handleUpdate}>
      <label htmlFor='username'>UserName :  
      <input type='text' onChange={this.handlChange} name='username'/>
      </label>
      <label htmlFor='name'>Name : 
      <input type='text' onChange={this.handlChange} name='name'/>
      </label>
      <label htmlFor='email'>email : 
      <input type='email' onChange={this.handlChange} name='email'/>
      </label>
      <input type='submit'/>
    </form>
  );
}
    
  }
  


export default App;
