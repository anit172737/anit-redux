import React from 'react';

class Demo extends React.Component{
    render(){
        return(
            <div>
                <input ref={this.props.inputRef}></input>
                <input type='button' value='submit' onClick={this.props.click}></input>
            </div>
        )
    }
}

export default Demo;