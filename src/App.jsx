import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Links from './routes/Links';
import { PokeContextProvider } from './context/PokeContext';
import Overlay from './pages/Overlay';

const App = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 5000); // Display for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <PokeContextProvider>
        {isOverlayVisible && <Overlay />}
        <Header />
        <Links />
        <Footer />
      </PokeContextProvider>
    </HashRouter>
  );
};

export default App;
