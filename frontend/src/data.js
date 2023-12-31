//create object to return sample products
const data = {
  products: [
    //each product is an object
    {
      id: 1,
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
      numReviews: 10, // this is different from backend data.js
      description: 'high quality shirt',
    },
    {
      id: 2,
      name: 'Adids Fit Shirt',
      slug: 'adids-fit-shirt',
      gender: 'woman',
      category: 'Shirts',
      color: 'purple',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      id: 3,
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
      id: 4,
      name: 'Adids Fit Pants',
      slug: 'adids-fit-pants',
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
