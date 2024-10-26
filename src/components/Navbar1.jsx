import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";


function Navbar1() {

  const cartItems=useSelector(state=>state.cart);

  console.log(cartItems.length)  
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem', height: '50px' }}>
      <Container>
        
        <Navbar.Brand as={Link} to="/home"  className='fw-bold fs-1 text-primary'>Trendz</Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className='d'>
              <NavDropdown.Item href="#action/3.1">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women's clothiing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jewellery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Electonics</NavDropdown.Item>
              <Navbar.Text>              </Navbar.Text>
            </NavDropdown>
            <Link to='/cart'>
            <div style={{position:'relative'}}>
            <FaShoppingCart  className='mt-3 ms-3 w-15 ' />
            <span style={{ height:'25px', width:'15px', position:'absolute', top:2,right:-10, backgroundColor:'red',
               color:'white', borderRadius:'100%',paddingBottom:'2px', paddingLeft:'3px'}}> 
            {cartItems.length}</span>
            </div>
            </Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;