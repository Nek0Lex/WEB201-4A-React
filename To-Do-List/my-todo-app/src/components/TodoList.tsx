import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    "Buy groceries",
    "Clean the house",
    "Walk the dog",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (todos.length == 0) {
    return (
      <>
        <div>There are no to-dos.</div>
      </>
    );
  } else {
    return (
      <>
        <ul className="list-group">
          {todos.map((item, index) => {
            if (selectedIndex == index) {
              return (
                <button
                  type="button"
                  className="list-group-item list-group-item-action active"
                  key={index}
                >
                  {item}
                </button>
              );
            } else {
              return (
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  key={index}
                  onClick={() => handleBtn(index)}
                >
                  {item}
                </button>
              );
            }
          })}
        </ul>
      </>
    );
  }

  function handleBtn(index: number) {
    setSelectedIndex(index);
  }
}
