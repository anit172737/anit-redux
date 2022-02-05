import { lazy } from "react";
import React from 'react';

const Home = lazy(()=>import('./home'));

const items = [{
    firstName:'anit',
    lastName:'dhadve'
},
{
    firstName:'ajinkya',
    lastName:'dhadve'
},

]
const Demo = ()=>{

    return(
        <div>
            <Home items={items}></Home>
        </div>
    )
}

   
export default Demo;
