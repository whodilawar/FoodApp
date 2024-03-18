// import React from "react";
// import { useSelector } from "react-redux";
// const OrderList = () => {
//   const cartProducts = useSelector((state) => state.cart.cartItems);
//   return (
//     <>
//       {cartProducts.map((each, index) => {
//         return (
//           <div className="product__item d-flex flex-column justify-content-between">
//             <div className="product__content">
//               <img className="product__img w-50" alt="Pizza" />
//               <h5></h5>
//             </div>
//             <div className="d-flex flex-column align-items-center justify-content-between">
//               <span className="product__price mb-2">33 € </span>
//               <button className="addTOCART__btn">Add to Cart</button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default OrderList;

import React from "react";
import { useSelector } from "react-redux";
const OrderList = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__content">
          <img className="product__img w-50" alt="Pizza" />
          <h5></h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <span className="product__price mb-2">33 € </span>
          <button className="addTOCART__btn">Add to Cart</button>
        </div>
      </div>

      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__content">
          <img className="product__img w-50" alt="Pizza" />
          <h5></h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <span className="product__price mb-2">33 € </span>
          <button className="addTOCART__btn">Add to Cart</button>
        </div>
      </div>

      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__content">
          <img className="product__img w-50" alt="Pizza" />
          <h5></h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <span className="product__price mb-2">33 € </span>
          <button className="addTOCART__btn">Add to Cart</button>
        </div>
      </div>

      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__content">
          <img className="product__img w-50" alt="Pizza" />
          <h5></h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <span className="product__price mb-2">33 € </span>
          <button className="addTOCART__btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default OrderList;
