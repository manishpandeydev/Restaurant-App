import React, { useContext, useMemo, useState,useEffect } from "react";
import { FoodContext } from "./FoodContext";
import "../assets/Home.css";
import ItemsList from "./ItemsList";

const Menu = () => {
  // Access the context
  const foodItems = useContext(FoodContext);

  // Log foodItems to verify it's not undefined
  const [selectedItem, setSelectedItem] = useState("Main Course");

  const [newitems, setNewItems] = useState([]);
  const handleItemClick = (event) => {
    const selectedText = event.target.textContent;
    setSelectedItem(selectedText);
  };
  const [isItemsListVisible, setIsItemsListVisible] = useState(false);

  const toggleItemsListVisibility = () => {
    setIsItemsListVisible(!isItemsListVisible);
  };


  const addTocart = (item) => {
    setNewItems([...newitems, item]);
    console.log(newitems);
  };



  // Render the Menu component
  return (
    <div className="menu">
 <div>
      <button style={{margin:"1rem"}} className="btn btn-danger" onClick={toggleItemsListVisibility}>
        {isItemsListVisible ? "Hide Items" : "Show Items"}
      </button>
      {isItemsListVisible && <ItemsList newitems={newitems} isItemsListVisible={isItemsListVisible}/>}
    </div>
      <div className="dropdown" style={{ float: "right", margin: "1rem" }}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedItem}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#" onClick={handleItemClick}>
              Main Course
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={handleItemClick}>
              Appetizers
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={handleItemClick}>
              Beverages
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "cursive",
            color: "white",
            boxShadow: "0px 2px 1px #3a7bd5",
            padding: "1rem",
            background: " #00d2ff " /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #3a7bd5, #00d2ff)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #3a7bd5, #00d2ff)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

            borderRadius: "1rem",
          }}
        >
          {selectedItem}
        </h2>
      </div>

      <div className="div-container">
        <div className="menu">
          {/* Iterate over each category */}
          {foodItems.map((category) =>
            useMemo(() => (
              <div key={category.category}>
                {/* Render category only if it matches the selected item */}
                {selectedItem === category.category ? (
                  <div>
                    {/* Iterate over items in the category */}
                    <div className="div-container">
                      {category.items.map((item) => (
                        <div key={item.id} className="card1">
                          <img src={item.img} alt={item.title} />
                          <h3>{item.title}</h3>
                          <p
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                              fontFamily: "cursive",
                            }}
                          >
                            ${item.price}
                          </p>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => addTocart(item)}
                          >
                            Add to list
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
