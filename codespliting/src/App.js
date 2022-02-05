import React,{Suspense,lazy} from 'react';
import './App.css';
const Demo = lazy(()=>import('./components/demo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Demo/>
      </Suspense>
      
    </div>
  );
}

export default App;
