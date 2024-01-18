import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  function addPlant(newPlant) {
    // console.log("🚀 ~ addPlant ~ newPlant:", newPlant);
    // I'll often console log the parameter of a callback function to make sure it gets passed down all the way to
    // the component with the triggering event, and that the caller is sending the right data as an argument

    // use the spread operator in a new array whenever you want to add a new object to an existing array in state
    setPlants([...plants, newPlant]);
  }

  function updatePlant(updatedPlant) {
    console.log("🚀 ~ updatePlant ~ updatedPlant:", updatedPlant);
    // const updatedPlants = plantsArr.map(plant => {
    //   if (plant === updatedPlant) return updatedPlant;
    //   return plant;
    // })
    // .map is the way to update one object in an array in state -> to render a change to one component out of a list
    setPlants(
      plants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  }

  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* USE LOGICAL-OR || OPERATOR IF YOU WANT YOUR SEARCH INPUT TO APPLY TO MORE THAN ONE PROPERTY OF THE OBJECTS YOU'RE FILTERING */
  // const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()) || plant.price.toString().includes(searchString))

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <PlantList
        plants={plantsToDisplay}
        onEditPlant={updatePlant}
      />
    </main>
  );
}

export default PlantPage;
