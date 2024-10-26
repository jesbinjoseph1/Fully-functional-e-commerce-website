import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch} from 'react-redux';
 
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';


function Cards({product}) {
      const dispatch=useDispatch(); 
      const  addCart=(product)=>{
      dispatch(addToCart(product))
}
  return (
    <div className='col-md-3'>

    <Card className='h-100 text-center p-4' style={{ width: '18rem' }}>
      <Link to={`/products/${product.id}`}  state={{product}}>
      <Card.Img variant="top" src={product.image} style={{ height: '250px' }} /></Link>
      <Card.Body>
        <Card.Title className='mb-0'>{product.title.substring(0,12)}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Button variant="btn btn-outline-dark" onClick={()=>addCart(product)}>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;