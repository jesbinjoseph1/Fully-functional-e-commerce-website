import React from 'react'
import './Home.css'
import image1 from '../images/Estrategias-ecommerce-para-los-pequenos-y-medianos-negocios.jpg'
import { Button, Card } from 'react-bootstrap';
import Products from '../components/Products';
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
    <div id='hero-container '>

    <Card className="bg-dark text-white border-0">
      <Card.Img src={image1} alt="hero"/>
      <Card.ImgOverlay>
        <div className="container">
        <Card.Title className='display-3 fw-bolder mb-0 mt-4'>New Season Arrivals</Card.Title>
        <p>Check out all the trends</p>
        <Link to='/products'>
        <Button variant="secondary" size="lg">
          Visit store
        </Button>
        </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </div>
  );
}

export default Home