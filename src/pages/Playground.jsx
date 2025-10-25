import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["HTML", "CSS", "JavaScript", "React", "Python"]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault(); // biar drop bisa jalan
    if (index === draggingIndex) return;
    const newList = [...items];
    const draggedItem = newList[draggingIndex];
    newList.splice(draggingIndex, 1); // hapus item yang di-drag
    newList.splice(index, 0, draggedItem); // masukin ke posisi baru
    setDraggingIndex(index);
    setItems(newList);
  };

  const handleDrop = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <ul className="bg-gray-800 p-4 rounded-lg w-80 space-y-2">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={handleDrop}
            className={`p-3 rounded-lg cursor-move transition 
              ${draggingIndex === index ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
