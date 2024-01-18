import React, { useState } from "react";

export default function EditPlantForm({
  id,
  price,
  onEditPlant,
  onFormSubmit,
}) {
  const [inputPrice, setInputPrice] = useState(price); // called state inputPrice on purpose to avoid name collision with price in props

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: inputPrice }),
    };
    fetch(`http://localhost:6001/plants/${id}`, config) // on a refactor, the fetch could be abstracted into its own function
      .then((res) => res.json())
      .then(onEditPlant);
    onFormSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputPrice}
        onChange={(e) => setInputPrice(parseFloat(e.target.value))} // the input value will be a string by default, so have to change it to a number with parseFloat
        type="number"
        step="0.01"
      />
      <button type="submit">Update Price</button>
    </form>
  );
}
