// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("red");

  return (
    
      <div style={{backgroundColor:color}} className={'h-screen flex flex-col justify-center items-center transition-colors duration-500' }>
        <h1 className="text-white text-3xl mb-4">{color}</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-110 transform transition-transform" type="button" onClick={() => setColor("blue")}>Blue</button>
          <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:scale-110 transform transition-transform" type="button" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="px-4 py-2 bg-violet-300 text-black rounded hover:scale-110 transform transition-transform" type="button" onClick={() => setColor("violet")}>violet</button>
        </div>
      </div>
    );
  }
export default App;
