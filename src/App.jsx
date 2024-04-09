import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cards from './components/Cards';
import { useState } from 'react';

function App() {
  const [night, setNight] = useState(false);
  return (
    <div className={night?"App night" : "App"}>
      <Header/>
      <button onClick={()=>setNight(!night)}>bgcolor</button>
      <Main/>
      <Cards/>
    </div>
  );
}

export default App;