import React, { lazy } from 'react';
const Cat = lazy(()=>import('./cat'));

class Mouse extends React.Component{
    state={x:0, y:0}

    handleMouseMove=(event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY,
        })
    }
    render(){
        return(
            <div style={{height:'60vh', margin:'4rem', border:'3px solid yellowgreen'}} onMouseMove={this.handleMouseMove}>
                <p>the position of mouse is x = {this.state.x}, y = {this.state.y}</p>
                <Cat state={this.state}></Cat>
                
            </div>
        )
    }
}

export default Mouse;