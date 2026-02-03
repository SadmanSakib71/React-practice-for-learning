import { useState } from "react";

const initialItems = [
  { title: "Burger", id: 1 },
  { title: "Sandwich", id: 2 },
  { title: "Rice", id: 3 },
];

const Travel = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleChange = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      }),
    );
  };
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>
          <input
            onChange={(e) => handleChange(item.id, e)}
            value={item.title}
          />
          <button onClick={() => setSelectedId(item.id)}>Choose</button>
        </li>
      ))}
      <p>YOu picked: {selectedItem?.title}</p>
    </div>
  );
};

export default Travel;
