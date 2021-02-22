import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://dontpavemybay.org/wp-content/uploads/2019/05/Product-Ads-75-Clicks_728x90._V174189179_.gif"
          alt=""
        />
        <div>
          {user ? <h2>Hello, {user?.email}</h2> : null}

          <h2 className="checkout_title">Your Cart</h2>
          {/* <CheckoutProduct
            id={1}
            title="This is test data, This is test data, This is test data, This is test data"
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            price={19.99}
            rating={3}
          />
          <CheckoutProduct
            id={1}
            title="This is test data, This is test data, This is test data, This is test data"
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            price={19.99}
            rating={3}
          /> */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
