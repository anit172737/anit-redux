
import {useState, useEffect} from 'react';
import './sass/App.scss';

const App = () =>{

  const [qtns, setQtns] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // getQtnHandle=()=>{
  //   axio
  // }

  useEffect(() => {
    
    // return () => {
    //   cleanup
    // }
  }, [])

    return (
      <div className="App">
        Anit
      </div>
    );
  }

export default App;
