import React from 'react';
import {Card} from 'react-bootstrap';

const Product = ({product}) => {
  return (
      <Card className='my-3 py-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'/>
        </a>
      </Card>
  );
};

export default Product;

//Module-3 lesson-3 07:38 finished
