import './App.css';
import Navbar from './components/navbar/Navbar';
import React from 'react';
import MainApp from './components/main-app/MainApp';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainApp />
      <Footer />
    </div>
  );
};

export default App;
