import React, { useState } from 'react';
import Loader from './components/loader';
import CustomCursor from './components/CustomCursor';
import './styles/fonts.css';
import './styles/global.css';
import Accordion from './components/Accordion';
const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Reemplaza con tus elementos


  return (
    <div className=''>
      <CustomCursor />
      {!loadingComplete && <Loader onFinishLoading={handleFinishLoading} />}
      {/* Contenido de tu aplicación */}
      {loadingComplete && 
      <main className='main'>
          {/* <Carousel items={items} /> */}
          <Accordion />
          
          <div className='bands'>
            {items.map((item, index) => (
              <div key={index} className='band'>
                {/* Contenido de tu band */}
              </div>
            ))}
          </div>
        </main>}

    </div>
  );
};

export default App;
