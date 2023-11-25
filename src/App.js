import React, { useState } from 'react';
import Loader from './components/loader';
import CustomCursor from './components/CustomCursor';
import './fonts.css';
const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  return (
    <div className=''>
      <CustomCursor />
      {!loadingComplete && <Loader onFinishLoading={handleFinishLoading} />}
      {/* Contenido de tu aplicación */}
      {loadingComplete && <div></div>}
    </div>
  );
};

export default App;
