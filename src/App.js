import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
  }

  return (
    <>
      <Navbar title="Word Magic" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter your text below" mode={mode} />
    </>
  );
}

export default App;
