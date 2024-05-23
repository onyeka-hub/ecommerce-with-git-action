const request = require('supertest');
const app = require('./server');

let server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    console.log('Server is running on port 4000');
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('API Endpoints', () => {
  let productId;

  // Test for adding a new product
  it('should add a new product', async () => {
    const res = await request(server)
      .post('/products')
      .send({ name: 'Test Product', price: 10.99 });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    productId = res.body.id;
  });

  // Test for getting all products
  it('should get all products', async () => {
    const res = await request(server).get('/products');
    
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Test for getting a single product
  it('should get a single product', async () => {
    const res = await request(server).get(`/products/${productId}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Test Product');
  });

  // Test for updating a product
  it('should update a product', async () => {
    const res = await request(server)
      .put(`/products/${productId}`)
      .send({ name: 'Updated Product', price: 15.99 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Product');
  });

  // Test for deleting a product
  it('should delete a product', async () => {
    const res = await request(server).delete(`/products/${productId}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Product deleted successfully');
  });
});
