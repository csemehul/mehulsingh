import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <button onClick={() => setShowModal(true)}>Show More</button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </header>
    </div>
  );
}

export default App;
