/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useReducer } from "react";
import "./todo.css";
import img from "../images/delete.png";
function Todo() {
  const todoList = (value, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "ADD_TODO":
        return [...value, { text: action.text, complete: false }];
      case "DELETE_TODO":
        return value.filter((_, index) => index !== action.index);
      case "LINE_THROUGH":
        return value.map((todo, index) => {
          if (index === action.index) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
    }
  };
  const [todo, dispatch] = useReducer(todoList, []);
  const [text, setText] = useState("");
  const [search,setSearch]=useState("")
  const addTodo = () => {
    if (text !== "") {
      dispatch({ type: "ADD_TODO", text });
      setText("");
    }
  };
  const removeTodo = (index) => {
    dispatch({ type: "DELETE_TODO", index });
  };
  const lineThrough = (index) => {
    dispatch({ type: "LINE_THROUGH", index });
  };
  const searchList=()=>{
    const searchValue=search.toLowerCase()
    // eslint-disable-next-line array-callback-return
    if (searchValue === "") {
      return todo; // Return the original list if the search input is empty.
    }
    // eslint-disable-next-line array-callback-return
    const listArr=todo.filter((list)=>
      list.text.toLowerCase().includes(searchValue)
    )
    return listArr;
  }
  return (
    <div className="main">
      <div className="todo">
        <div className="todo-box">
          <h1>Todo List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="todo-form"
          >
            <div>
              <input
                placeholder="Add Todo"
                type="text"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={addTodo}>Add Todo</button>
            </div>
            <input
              placeholder="Search todo"
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="all-task">
          {todo.length > 0 ? (
            <React.StrictMode>
              <h3>All Task</h3>
              <ul className="todo-ul">
                {searchList().map((data, index) => (
                  <li key={index}>
                    <span
                      onClick={() => lineThrough(index)}
                      style={{
                        textDecoration: data.complete ? "line-through" : "none",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      {index + 1}. {data.text}
                    </span>
                    <button onClick={() => removeTodo(index)}>
                      <img src={img} />
                    </button>
                  </li>
                ))}
              </ul>
            </React.StrictMode>
          ) : (
            <h3>Add Something</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
