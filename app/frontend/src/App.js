import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './styles/ProductFormStyles.css';
import './styles/ProductListStyles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management</h1>
      </header>
      <main>
        <ProductForm />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
