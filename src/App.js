import logo from './logo.svg';
import './App.css';
import React from 'react';
import articles from './data';

function App() {
  var [data,setdata]=React.useState(articles)
  console.log(articles)
  function dark(){
    var a=document.getElementById("main")
    var but=document.getElementById("1")
    if(a.className==="box1")
    {
      a.classList.remove("box1");
      a.classList.add("night")
      document.getElementById("n").style.color="white"
      document.body.style.backgroundColor="black"
      but.innerHTML="on"
      console.log(a)
    }
    else{
      a.classList.add("box1");
      a.classList.remove("night")
      document.body.style.backgroundColor="white"
      document.getElementById("n").style.color="black"
      
      but.innerHTML="off"
    }
    
    
  }
  return (
    <div className="App" >
      <div className='nightmode'>
      <p id="n">night mode</p>
      <button onClick={()=>dark()} id="1">off</button>
      </div>
      <div className='box1' id="main">
      {
        data.map(a=><div>
          <p>{a.title}</p>
        <span>{a.length} min read</span>
          <p>{a.snippet}</p>
          </div>)
      }
      </div>
      </div>
  
  );
}

export default App;
