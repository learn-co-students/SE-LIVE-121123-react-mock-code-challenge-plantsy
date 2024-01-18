import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onEditPlant }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      {...plant}
      onEditPlant={onEditPlant}
    />
  ));

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
