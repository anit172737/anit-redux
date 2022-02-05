import React from 'react';
import '../App.scss';

class Movies extends React.Component{
    render(){

        const {movies, clicked}= this.props;
        return <table className='table'>
            <thead className='table__head'>
                <tr className='table__row'>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => 
                    
                        <tr key={movie.id} className='table__row'>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.rate}</td>
                            <td>
                                <input type='button' 
                                value='Delete' 
                                onClick={() => clicked(movie)}
                                className='table__btn'
                            /></td>
                        </tr>
                    
                    
                    )}
                
            </tbody>
        </table>
        
   
    }
}

export default Movies;