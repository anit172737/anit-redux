
import './sass/_base.scss';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sugarbox from './components/sugarbox';
import Gallery from './components/gallery';
import Story from './components/story';
import Haldi from './components/haldi';

class App extends React.Component{
  render(){
    return (
     
        <div className="App">
        <Header></Header>
        <Sugarbox></Sugarbox>
        <Haldi></Haldi>
        <Story></Story>
        <Gallery></Gallery>
        <Footer></Footer>
        </div>
      
    );
  }
  
}

export default App;
