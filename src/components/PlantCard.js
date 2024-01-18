import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";

function PlantCard({
  id,
  image = "https://via.placeholder.com/400",
  name,
  price,
  onEditPlant,
}) {
  const [isInStock, setIsInStock] = useState(true);
  const [isShowEdit, setIsShowEdit] = useState(false);

  const toggleInStock = () => setIsInStock(!isInStock);

  const toggleShowEdit = () => setIsShowEdit(!isShowEdit);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={toggleInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
      <button onClick={toggleShowEdit}>{isShowEdit ? "Close" : "Edit"}</button>
      {/* we are able to hide the new price form with conditional rendering based on showEdit boolean in state */}
      {isShowEdit && (
        <EditPlantForm
          id={id}
          price={price}
          onEditPlant={onEditPlant}
          onFormSubmit={toggleShowEdit}
        />
      )}
    </li>
  );
}

export default PlantCard;
