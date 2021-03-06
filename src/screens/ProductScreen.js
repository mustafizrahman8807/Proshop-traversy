import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../component/Rating';
import axios from 'axios';

const ProductScreen = ({match}) => {
  // const product = products.find(p => p._id === match.params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
      <>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating text={`${product.numReviews} reviews`}
                        value={product.rating}/>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Button className='btn-block rounded' type='button'
                            disabled={product.countInStock === 0}>
                      Add to Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Link className='btn btn-dark my-3 rounded' to='/'>
          Go Back
        </Link>
      </>
  );
};

export default ProductScreen;

////Module-3 lesson: 3


