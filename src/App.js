import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

