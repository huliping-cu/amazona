//create object to return sample products
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    //each product is an object
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      gender: 'woman',
      category: 'Shirts',
      color: 'black',
      image: '/images/p1.jpg', //679px x 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 100,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      gender: 'woman',
      category: 'Shirts',
      color: 'purple',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      gender: 'woman',
      category: 'Pants',
      color: 'black',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pants',
      slug: 'adidas-fit-pants',
      gender: 'woman',
      category: 'Pants',
      color: 'black',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
