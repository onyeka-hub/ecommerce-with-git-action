import React from 'react';
import '../styles/ProductListStyles.css';

const products = [
  { id: 1, name: 'laptop', price: 10.99 },
  { id: 2, name: 'HDD', price: 15.99 },
  { id: 2, name: 'cable', price: 20.99 }
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
