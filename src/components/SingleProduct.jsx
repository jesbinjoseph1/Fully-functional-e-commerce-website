import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { addToCart } from '../redux/cartSlice';

function SingleProduct() {
  const location = useLocation();
  const { product } = location.state;
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='col-md-3'>
      <Card className='h-100 text-center p-4' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title className='mb-0'>{product.title.substring(0, 12)}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="outline-dark" onClick={() => addCart(product)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;