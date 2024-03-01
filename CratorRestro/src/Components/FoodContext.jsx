// FoodContext.js
import React, { createContext, useMemo, useState } from 'react';

export const FoodContext = createContext();

export const FoodProvider =  ({ children }) => {
  // Define state for food items with different categories
  const [foodItems, setFoodItems] = useState([
    {
      category: "Main Course",
      items: [
        {
          id: 1,
          title: "CheeseBurger",
          img: "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740",
          price:35
        },
        {
          id: 2,
          title: "Cheese Sandwich",
          img: "https://img.freepik.com/free-photo/top-view-delicious-ham-sandwiches-inside-plate-dark-surface_179666-35068.jpg?t=st=1709264491~exp=1709268091~hmac=745568337c36685d1eb659c0f31b9ffb49a392208dc2cb1069d6746042af9567&w=740",
          price:22
        },
        {
          id: 4,
          title: "ChickenBurger",
          img: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740",
          price:23
        },
        {
          id: 5,
          title: "Cheese Sandwich",
          img: "https://img.freepik.com/free-photo/top-view-delicious-ham-sandwiches-inside-plate-dark-surface_179666-35068.jpg?t=st=1709264491~exp=1709268091~hmac=745568337c36685d1eb659c0f31b9ffb49a392208dc2cb1069d6746042af9567&w=740",
          price:22
        },
        {
          id: 6,
          title: "Spicy Chicken",
          img: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?t=st=1709264934~exp=1709268534~hmac=e9209b37108cb04e09355aa6c90f58d54ec57f39edba616931c7361e82c3fa4f&w=740",
          price:33
        },
        {
          id: 3,
          title: "Hot Dog",
          img: "https://img.freepik.com/free-photo/classic-hot-dog-with-ketchup-mustard-sauce-white-wooden-table_123827-29761.jpg?w=740",
          price:24
        },
      ]
    },
    {
      category: "Appetizers",
      items: [
        {
          id: 7,
          title: "Fruit Salad",
          img: "https://img.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-13528.jpg?t=st=1709265273~exp=1709268873~hmac=951bd60c470068f058da5078305e7f775706c7f984f533481fd668f49daeade1&w=740",
          price:13
        },
        {
          id: 8,
          title: "Cocktails",
          img: "https://img.freepik.com/free-photo/glass-orange-cocktail-garnished-with-mint-green-apple-slices_140725-6945.jpg?t=st=1709265331~exp=1709268931~hmac=9ab27d5a8aeaf25bbdb6e7db28aca6ed1186a88286e14fa2156f6a2d3b2e7229&w=360",
          price:12
        },
        {
          id: 9,
          title: "Nuggets",
          img: "https://img.freepik.com/free-photo/bottom-view-chicken-nuggets-lettuce-cherry-tomatoes-pan-dark-red-background_140725-112076.jpg?t=st=1709265443~exp=1709269043~hmac=30178d6a5257898251c45aa63bc1d19f23ae6d3cef53880d93d387b11e3e070d&w=740",
          price:13
        },
        {
          id: 10,
          title: "Sandwich",
          img: "https://img.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg?t=st=1709265481~exp=1709269081~hmac=c2e63013fd3499a55dc0fd0f5eb2c0aa0790f684e3372dbd523b9aaac0146843&w=740",
          price:12
        },
        {
          id: 11,
          title: "French Fries",
          img: "https://img.freepik.com/free-photo/top-view-delicious-fries-sauce_23-2149235944.jpg?t=st=1709265548~exp=1709269148~hmac=e83a4226140f15cbd5134cee0267bbf2b8766d263f2eab9aa27d15f2172e8652&w=360",
          price:15
        },

      ]
    },
    {
      category: "Beverages",
      items: [
        {
          id: 12,
          title: "Milk Shake",
          img: "https://img.freepik.com/free-photo/milkshake-table_144627-27512.jpg?t=st=1709265778~exp=1709269378~hmac=8d52aebcb875eddd3cd89fb5a2e498f210fb3c6fa2762ecbe61df81758ed345b&w=360",
          price:3
        },
        {
          id: 13,
          title: "Ice tea",
          img: "https://img.freepik.com/free-photo/delicious-iced-tea_144627-27240.jpg?t=st=1709265835~exp=1709269435~hmac=f2a4bc29a0315a97695147e1254533064c546ff39351170cc63039475dc267ce&w=360",
          price:2
        },
        {
          id: 14,
          title: "Coffe",
          img: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?t=st=1709265859~exp=1709269459~hmac=0022dc203e08047478f40b1e6d891d809fe17ae4eeb7fca0bc1b23efa6edb7a5&w=740",
          price:5
        },


      ]
    }
    // Add more categories as needed
  ]);

  return (
    <FoodContext.Provider value={foodItems}>
      {children}
    </FoodContext.Provider>
  );
};
