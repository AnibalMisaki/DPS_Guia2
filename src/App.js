import React from 'react';
import './App.css';
import Form from './components/Form';
const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Lista de compras de un supermercado
        </p>
        <Form />
      </div>
    </div>
  );
}
export default App;