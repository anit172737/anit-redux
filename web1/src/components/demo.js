import React from 'react';

const Demo = (props) =>{
    let i=2;
    return(
        <div>   
            <button className='but'>Hit ME</button>
            <h1>{i===1 ? 'true' : 'false'}</h1>
        </div>
    )
}

export default Demo;