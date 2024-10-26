
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button,ButtonGroup ,Row, Col, Container } from 'react-bootstrap';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/cartSlice';
import './Cart.css'
const CartPage = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };


  return (
    <Container className='cart-container pt-5'>
  <h1 className='text-center mb-4 mt-3'>Your Cart</h1>
  <div className="d-flex justify-content-end mt-4">
            <h2 className="text-xl font-bold">Total: Rs. {totalPrice.toFixed(2)}</h2>
          </div>
  {cartItems.length === 0 ? (
    <h4 className='text-center text-muted'>Your cart is empty</h4>
  ) : (
    <Row className="inner-div" md={6} lg={4}> 
      {cartItems.map(item => (
        <Col key={item.id} md={6} lg={4} className="mb-4"> 
          <Card className="cart-item">
            <Card.Img variant="top" src={item.image} className="cart-item-img" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="flex-grow-1">Quantity: {item.quantity}</Card.Text>

              <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => handleIncrement(item.id)}>+</Button>
              <Button variant="secondary" onClick={() => handleDecrement(item.id)}>_</Button>
              </ButtonGroup>
              <Button variant="danger" onClick={() => removeItemFromCart(item.id)} className="mt-auto">
                Remove
              </Button>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
  }
     
      
      
</Container>

  );
};

export default CartPage;