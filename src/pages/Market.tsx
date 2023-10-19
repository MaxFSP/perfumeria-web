import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import BasicCard from "./Card";
import { Item } from "../interfaces/APIResponseTypes";
import "./market.scss";
const Market = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/item")
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="market-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="card-grid">
        {items.map((item: Item) => (
          <BasicCard
            itemId={item.itemId}
            name={item.name}
            imageSrc={item.imageLink}
            quantity={item.quantity}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Market;
