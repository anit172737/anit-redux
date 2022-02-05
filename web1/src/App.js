
import './scss/App.scss';
import './scss/_base.scss';
import './scss/form.scss';
import './scss/table.scss';
import React, {Suspense} from 'react';
import Loader from 'react-loader-spinner';
import Table from './components/table';
import Form from './components/form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      isLoading: true,
      users:[],
        username:'',
        name:'',
        email:'',
        
      error:null
    };
  }

  fetchHandle(){
    fetch(`http://localhost:8080/api/users/`)
    .then(response => response.json())
    .then(data => this.setState({users:data, isLoading:false}))
    .catch(error => this.setState({error, isLoading:false}));
  }


  handlePost = () => {
    const {username,name,email}= this.state;
    const allUsers = this.state.users.map(e => e.username);
    const curUser = this.state.username;

    if(allUsers.includes(curUser)){
      alert(`User already exist!`)
    }
    else{
      fetch(`http://localhost:8080/api/users/`,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username,name,email})
  
    })
  }
  }

  handleUpdate=()=>{
    const {username, name, email} = this.state;
    const allUsers = this.state.users.map(e => e.username);
    const curUser = this.state.username;

    if(allUsers.includes(curUser)){
      fetch(`http://localhost:8080/api/users/${name}`, {
      method:'put',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({username, name, email})
    })
    }
    else{
      alert(`User doesn't exist!`)
    }
    
  }

  handleDelete =()=>{
    const {name} = this.state;
    fetch(`http://localhost:8080/api/users/${name}`,{
      method:'delete',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({})
    })
  }

  handleChange =(nam, val)=>{
    this.setState({[nam]:val});
  }

  componentDidMount(){
    this.fetchHandle();
  }
  
  // tableHeader (){
  //   let header = Object.keys(this.state.users[0]);
  //   return header.map((e, index) => {
  //     return <th style={{backgroundColor:'yellowgreen'}} key={index}>{e.toUpperCase()}</th>
  //   })
  // };

  render(){
    const{isLoading,error} = this.state;
    return (
      <Suspense fallback={<Loader type='Circles' color='yellowgreen' height='4rem' width='4rem'></Loader>}>
      <React.Fragment >
      <div className='sec'>
        <Form handleSend={this.handleUpdate} onHandleChange={this.handleChange}></Form>

      <div className='table__section'>
        <h2>Employee Details</h2>
      {error ? <p>{error.message}</p> : null}
      <div className="App">
        {!isLoading ? 
        (
          <Table state={this.state}></Table>  
        )
        :<Loader type='Puff' color='yellowgreen' height='4rem' width='4rem'></Loader>}
         
         </div>
         </div>
  
         </div>
         </React.Fragment>
         </Suspense>
    );
  }
  
}


export default App;
