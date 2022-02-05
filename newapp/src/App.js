
import React from 'react';

import Sidebar from "./component/sidebar";
import Header from './component/header';
import Realtors from './component/realtors';
import Features from './component/features';
import StoryPic from './component/storyPic';
import StoryCont from './component/storyCont';
import Homes from './component/homes';
import Gallery from './component/gallery';
import Footer from "./component/footer";
import "./css/App.scss";
import './css/_base.scss';
import './css/sidebar.scss';
import './css/realtors.scss';
import './css/features.scss';
import './css/storyPic.scss';
import './css/storyCont.scss';
import './css/homes.scss';
import './css/gallery.scss';
import './css/footer.scss';


class App extends React.Component{
 state = {
   header:'Header',
   content : 'Welcome to my Website',
 }
  render(){
    return (
      <div className = 'container'>
        <Sidebar className='sidebar'></Sidebar>
        <Header input ={this.state.header}></Header>
        <Realtors className='realtors'/>
        <Features className='features'></Features>
        <StoryPic></StoryPic>
        <StoryCont></StoryCont>
        <Homes></Homes>
        <Gallery></Gallery>
        <Footer ></Footer>
      </div>
    );
  }
  
}
 
export default App;
