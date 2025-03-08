import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ToDoList from "./ToDoList";

function ToDo() {
  const [inputData, setInputData] = useState("");
  const [newItem, setNewItem] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(newItem));
    console.log("tasks", newItem);
  }, [newItem]);

  const itemChange = (e) => {
    setInputData(e.target.value);
  };

  const list = () => {
    if (inputData.trim() !== "") {
      setNewItem((prev) => [...prev, { text: inputData, checked: false }]);
      setInputData("");
    }
  };

  const toggleChecked = (index) => {
    setNewItem((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteTask = (index) => {
    setNewItem((prev) => prev.filter((item, i) => i !== index));
  };

  const updateTask = (index, updatedText) => {
    setNewItem((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, text: updatedText } : item
      )
    );
  };

  return (
    <div className="main">
      <div className="center_div">
        <br />
        <h2>TODO LIST APP</h2>
        <br />
        <input
          type="text"
          value={inputData}
          placeholder="type your text .."
          onChange={itemChange}
        />

        <Button className="newBtn" variant="outlined" onClick={list}>
          <AddIcon />
        </Button>
        <br />
        <ol>
          {newItem.map((item, index) => {
            return (
              <ToDoList
                key={index}
                index={index}
                text={item.text}
                checked={item.checked}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleChecked={toggleChecked}
              />
            );
          })}
        </ol>
        <br />
      </div>
    </div>
  );
}

export default ToDo;
