import './scss/_base.scss';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Review from './components/review';
import Footer from './components/footer';
import Gallery from './components/gallery';


function App() {
  return (
    <div className="body">
      <div className ='container'>
        <Header></Header>
        <Sidebar></Sidebar>
        <Gallery></Gallery>
        <Main></Main>
        <Review></Review>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
