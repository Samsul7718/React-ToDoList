import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";

const ToDoList = ({
  text,
  index,
  updateTask,
  deleteTask,
  checked,
  toggleChecked,
}) => {
  // const [line, setLine] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // const cutLine = () => {
  //   setLine((prev) => !prev);
  // };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    updateTask(index, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo_item">
      <div className="todo_item_text ">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <li style={{ textDecoration: checked ? "line-through" : "none" }}>
            {console.log("text", text)}
            {text}
          </li>
        )}
      </div>
      <div className="todo_item_buttons">
        <span onClick={() => toggleChecked(index)}>
          <CheckCircleIcon
            style={{
              backgroundColor: checked ? "#0d8f23" : "#18121f",
            }}
            className="checkIcon button"
          />
        </span>
        {isEditing ? (
          <span onClick={handleSave}>
            <SaveIcon className="saveIcon button" />
          </span>
        ) : (
          <span onClick={handleEdit}>
            <EditIcon className="editIcon button" />
          </span>
        )}

        <span onClick={() => deleteTask(index)}>
          <DeleteIcon className="deleteIcon button" />
        </span>
      </div>
    </div>
  );
};

export default ToDoList;
