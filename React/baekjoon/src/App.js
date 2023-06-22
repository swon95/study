import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [add, setAdd] = useState(0)

  const Box = () => {
    return(
      <div style={{ width: '10px', height: '10px', border: 'solid 1px black'}}></div>
    )
  }
  
  function handleChange () {
    setAdd(add+1)
  }
  
  const loofBox = () => {
    const BlArr = []

    for (let i = 0; i < add; i++) {
      BlArr.push(<Box key={i} />)
    }
    return BlArr;
  }

  return (
  <div>
    <div><button onClick={handleChange}>click {add}</button></div>
    <div>{loofBox()}</div>
  </div>
  );
}

export default App;
