import Banner from "../components/Home/Banner";
import SingleItem from "./SingleItem";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
// import { useState } from "react";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("are you sure want to delete it");
        // Update the state to remove the deleted item
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      });
  };

  return (
    <div>
      <Banner></Banner>
      <SectionTitle></SectionTitle>
      <div className="flex flex-wrap gap-4 justify-center my-6">
        {items.map((singleData) => (
          <SingleItem
            key={singleData.id}
            singleData={singleData}
            onDelete={handleDelete}
          ></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
