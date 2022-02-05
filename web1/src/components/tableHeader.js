import React from 'react';
import '../scss/table.scss';

const Header = (props) => {
    // let myStyle = {
    //     fontSize:40,
    //     color:'yellowgreen',
    // }
    return(
        <tr className='table__header' >
            <th>username</th>
            <th>name</th>
            <th>email</th>
        </tr>
    )
}


export default Header;