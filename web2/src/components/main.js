import React from 'react';
import '../scss/main.scss';

const Main = ()=>{
    return(
        <div className='main'>
            <div className='main__sec'>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean tristique ex id nisl placerat, 
                eu placerat ligula feugiat. 
                Proin mattis ipsum et dapibus volutpat. 
                Nunc ac condimentum eros. Quisque laoreet orci 
                id vehicula bibendum. Fusce neque eros, 
                varius vel cursus a, porttitor non nunc." 
                <br></br>
                <br></br>
                <p className='main__sec--sub'>
                Nam feugiat aliquet est in tristique. 
                Aenean eu elit eu diam volutpat dictum.
                Maecenas euismod varius neque, 
                sit amet eleifend ante facilisis sed.
                </p>
                
                </p>
            </div>
        </div>
    )
}


export default Main;