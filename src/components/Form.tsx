import React, { useState } from "react";
import { ItemProps } from "./PackingList";

type TravelFormProps = {
  onAddItems: (item: ItemProps) => void;
};

const TravelForm = ({ onAddItems }: TravelFormProps) => {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  const handleSUbmit = (e: any) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, qty, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDescription("");
    setQty(1);
  };
  return (
    <form className="add-form" onSubmit={handleSUbmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name="item-qty"
        id="item-qty"
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default TravelForm;
