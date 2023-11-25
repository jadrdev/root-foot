// Loader.js

import React, { useState, useEffect } from 'react';
import '../styles/loader.css'

const Loader = ({ onFinishLoading }) => {
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(prevCounter => (prevCounter < 100 ? prevCounter + 1 : prevCounter));
        }, 30); 
    
        const timeout = setTimeout(() => {
          setLoading(false);
          clearInterval(interval);
          onFinishLoading();
        }, 5000);
    
        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      }, [onFinishLoading]);
  
    return (
      <div className={`loader ${loading ? 'loading' : ''}`}>
        <div className="words-container">
          <div className="word">{counter}</div>
          <div className="word">Giulio</div>
          <div className="word">Urbani</div>
          <div className="word">Chef</div>
          <div className="word">Nutricionist</div>
        </div>
      </div>
    );
  };
  
  export default Loader;