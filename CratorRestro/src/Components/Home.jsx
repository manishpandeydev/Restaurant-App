import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Home.css";

const Home = () => {
  const navigate = useNavigate();
  function bookseat(){
    navigate('/Booking')
  }
  function handleOrder(){
    navigate('/Menu')
  }
  return (
    <div className="back">
      <div className="top-container">
        <span>
          <h1>Best Restaurant in Area</h1>
          <p className="slogan">we serve the best quality</p>
        </span>
      </div>
      <div className="div-container">
        <div className="card1">
          <h1>Quality</h1>
          <p>
            We believe that our commitment to quality is what sets us apart from
            other restaurants. We are confident that you will enjoy your dining
            experience with us, and we hope that you will become a regular
            customer.
          </p>
          <button className="btn btn-warning" onClick={bookseat}>
            <b>Book seat</b>
          </button>
        </div>
        <div className="card1">
          <h1>Quantity</h1>
          <p>
            At our restaurant, we take pride in offering generous portions of
            delicious food that leave our customers fully satisfied.We believe
            in providing value beyond taste
          </p>
          <br />
          <button className="btn btn-warning" onClick={bookseat}>
            <b>Book Seat</b>
          </button>
        </div>
        <div className="card1">
          <h1>Flavors</h1>
          <p>
            At our restaurant, flavor is the heart and soul of every dish we
            serve. From bold and spicy to delicate and nuanced, our culinary
            creations tantalize the taste buds with an explosion of flavors.{" "}
          </p>
          <button className="btn btn-warning" onClick={bookseat}>
            <b>Book Seat</b>
          </button>
        </div>
      </div>

      {/*Trending food*/}
      <h2
        style={{
          textAlign: "center",
          margin: "5rem",
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "cursive",
          backgroundColor: "blueviolet",
          color: "white",
        }}
      >
        Trending food items!
      </h2>
      <div className="div-container">
        <div className="card1">
          <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=360&t=st=1709214713~exp=1709215313~hmac=05f9c09a24aa4cadca9b8cccb0e828ee12bf514d7ed470ee6f48c144e8a2c990"></img>
          <h3>Paneer $1.49</h3>
          <p>Indian dish</p>
          <button className="btn btn-danger" onClick={handleOrder}>
            <b>Order Now</b>
          </button>
        </div>
        <div className="card1">
          <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1709214969~exp=1709215569~hmac=a83bca5b06409b0a479374a79989c7e287053d0d3d78754b5e474cc6b32fdf4f"></img>
          <h3>Italian Pasta $3.49</h3>
          <p>Italian dish</p>
          <button className="btn btn-danger" onClick={handleOrder}>
            <b>Order Now</b>
          </button>
        </div>
        <div className="card1">
          <img src="https://img.freepik.com/free-photo/side-view-cabbage-rolls-with-quince-slices-onion-yogurt_140725-11434.jpg?t=st=1709215170~exp=1709218770~hmac=4ea02c5d7db5df83eedb4a86a678ea0cd1d458ad81b7d8aaa039d70f31e89e49&w=360"></img>
          <h3>Cabbage Rolls $5.49</h3>
          <p>Hungarian dish</p>
          <button className="btn btn-danger" onClick={handleOrder}>
            <b>Order Now</b>
          </button>
        </div>
      </div>
      <div style={{marginTop:"2rem",backgroundColor:"blueviolet",color:"white"}}><p style={{textAlign:"center"}}>Copyright @ 2024 All rights reserved</p></div>
    </div>
  );
};

export default Home;
