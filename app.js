// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [orderMessage, setOrderMessage] = useState('');

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleLogin = () => {
    axios.post('/login', { username, password })
      .then(response => {
        setLoggedInUser(response.data.user);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  };

  const handlePlaceOrder = () => {
    axios.post('/orders', { productId, userId: loggedInUser.id, quantity })
      .then(response => {
        setOrderMessage(response.data.message);
      })
      .catch(error => {
        console.error('Order placement error:', error);
      });
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>

      {!loggedInUser && (
        <div>
          <h2>User Login</h2>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {loggedInUser && (
        <div>
          <h2>Place Order</h2>
          <select value={productId} onChange={e => setProductId(e.target.value)}>
            <option value="">Select Product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
          <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}

      {orderMessage && <p>{orderMessage}</p>}
    </div>
  );
}

export default App;
