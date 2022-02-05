import React from 'react';
import Header from './tableHeader';
import '../scss/table.scss';


class Table extends React.Component{
    tableItem (){
        return(
            this.props.state.users.map(e=>{
                return(
                    <tr key={e.id} className='table__item'>
                        <td>{e.username}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                    </tr>
                )
            })
        )
       
    }

    render(){

        return(
                <table className='table'>
                    <tbody className='table__body'>
                        <Header></Header>
                        {this.tableItem()}
                    </tbody>
                </table>
        )
    }
}

export default Table;