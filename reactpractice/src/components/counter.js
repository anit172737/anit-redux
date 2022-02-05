import React from 'react';

class Counter extends React.Component{

    state = {
        value:this.props.value
    }

    handleChange =() => {
        this.props.value=0;
        this.setState({value:this.state.value + 1})
    }

   render(){
       const {value} = this.state;
    return(
        <div className='App__Counter-sec'>
            <h1>Increment Section</h1>
            <span className='App__Counter-value'>{value}</span>
            <input type='button' 
            value='Increment' 
            onClick={this.handleChange}
            className='App__Counter-btn'/>
        </div>
    )
   }
   
};


export default Counter;