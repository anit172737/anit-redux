
import './App.css';
import React,{Suspense, lazy, createRef} from 'react';
import Loader from 'react-loader-spinner';
const Demo = lazy(() => import('./components/demo'));
const Mouse = lazy(()=> import('./components/props'));

class App extends React.Component {
  input = createRef();

  handleclick=()=>{
    alert(`hii mr. ${this.input.current.value}`)
  }
  render(){
    return (
      <div className="App">
        <Suspense fallback={<Loader type='ThreeDots' color='orangered' height='4rem' width='4rem'></Loader>}>
          <label for='mouse'>Move the mouse around!</label>
        <Mouse name='mouse'></Mouse>
        <Demo inputRef={this.input} click={this.handleclick}></Demo>
        </Suspense>
        
      </div>
    );
  }
  
}

export default App;
