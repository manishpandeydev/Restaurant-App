import React, { useEffect, useState } from "react";
import "../assets/ItemsList.css";

const ItemsList = ({ newitems,isItemsListVisible }) => {
  const [hasItems, setHasItems] = useState(false);
const [priceT,setPriceT] = useState(0);
  useEffect(() => {
    setHasItems(newitems && newitems.length > 0);
  }, [newitems]);

  if (!hasItems && !isItemsListVisible) {
    return (
      console.log("nothing")

    );
  }


const calculatePrice=()=>{
  let priceT = 0;
newitems.forEach(item => {
  priceT += item.price;
});
setPriceT(priceT);
}



  return (
    <div id="bag" >
      <h2>Shopping Bag</h2>
      {newitems.length === 0? (<h4>Add items..... </h4>):
   newitems.map((item) => <div className="items"><h5>{item.title}</h5>
 <p>$ {item.price}</p></div>)
      }


    <br/>
    <h3>Tota Bill : ${priceT}</h3>
    <button className="btn btn-warning" onClick={calculatePrice}>Calculate Bill</button>
    <button style={{margin:"0.2rem"}} className="btn btn-danger" >Checkout</button>
    </div>
  );
};

export default ItemsList;
