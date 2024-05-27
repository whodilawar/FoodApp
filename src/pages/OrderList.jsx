import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
const OrderList = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts)
  return (
    <>
     <section>
      {cartProducts.map((each, index) => {
       
        return (
        
          <Container>
          <Row>
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={each.id}> 
          <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={each.image01} alt="Pizza" />
        <h5> {each.title} </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">{each.price} € </span>
        
      </div>
    </div>
    
    </Col>
      </Row>
      </Container>
        );
      
      })}
        </section> 
    </>
  );
};

export default OrderList;

