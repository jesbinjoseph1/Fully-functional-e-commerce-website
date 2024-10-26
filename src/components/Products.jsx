import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards';

function Products() {
 const [products,setProducts]=useState([]);
    
 async function  fetchData(){

try{  
const response= await axios.get('https://fakestoreapi.com/products')
setProducts(response.data)
console.log(response.data)

}
catch(err){
 console.log(err);

}
 }

 useEffect(()=>{
   fetchData()
   },[])

 return (
 <div className='productsBox mt-0 py-5 my-5'>
  <div className='row'>
    <div className='col-12  mb-5'></div>
<h1 className='fw-bolder display-6 text-center mb-3'>Latest Products</h1>
    <hr />
  {products.map((product)=><Cards product={product} key={product.id} />)}    
  </div>
 </div>
)
}

export default Products