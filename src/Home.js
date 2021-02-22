import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id={1212121}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (First Dummy)"
            price={10}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id={1212122}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Second Dummy)"
            price={99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id={1212123}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Third Dummy)"
            price={29}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1212124}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Fourth Dummy)"
            price={90}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id={1212125}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Fifth Dummy)"
            price={25}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id={1212126}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Sixth Dummy)"
            price={15}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id={1212127}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Seventh Dummy)"
            price={50}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1212128}
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! (Eighth Dummy)"
            price={199}
            image="https://images-eu.ssl-images-amazon.com/images/I/41D9tXQ21VL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
