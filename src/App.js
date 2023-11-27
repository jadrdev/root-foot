import React, { useState } from 'react';
import Loader from './components/loader';
import CustomCursor from './components/CustomCursor';
import './styles/fonts.css';
import './styles/global.css';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };


  return (
    <div>
      <CustomCursor />
      {!loadingComplete && <Loader onFinishLoading={handleFinishLoading} />}
      {/* Contenido de tu aplicación */}
      {loadingComplete && 
      <nav class="bar-navigation">
      <ul class="nav-list" style={{ '--total': 4 }}>
        <li class="nav-item" style={{ '--i': 3, '--color': 'var(--color-green)' }} tabindex="1">     
        </li>
        <li class="nav-item" style={{ '--i': 2, '--color': 'var(--color-gold)' }} tabindex="2"></li>
        <li class="nav-item" style={{ '--i': 1, '--color': 'var(--color-purple)' }} tabindex="3"></li>
        <li class="nav-item" style={{ '--i': 0, '--color': 'var(--color-red)' }} tabindex="4"></li>
      </ul>
    </nav>
      }

    </div>
  );
};

export default App;
