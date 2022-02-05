
import React from 'react';
import './App.scss';
import Movies from './components/movies';
import Counter  from './components/counter';

class App extends React.Component {
  state = {
    count : 0,
    movies : [
      {
        id: 1,
        title:'The Intern',
        genre:'Drama, Comedy',
        rate:5
      },
      {
        id: 2,
        title:'The Terminator',
        genre:'Drama',
        rate:4
      },
      {
        id: 3,
        title:'The Aviator',
        genre:'Drama',
        rate:4
      }
    ]

  }

 

handleDelete = (e) =>{
  const movies = this.state.movies.filter(movie => movie.id !== e.id)
  this.setState({movies: movies})
}

  render(){
    const {movies, count} = this.state;
    return(
      <div className='App'>
        <div className='App__sec'>
        <h1>Movies Section</h1>
        {movies.length === 0 ? 'There is no movie available':
        <Movies movies={this.state.movies} clicked={this.handleDelete}/>
        }
       </div>
       <div className='App__Counter'>
        <Counter value={count}/>
       </div>
      </div>
    )
  }
}




export default App;
