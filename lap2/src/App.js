import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { incCounter, decCounter, resetCounter } from "./reducers/counter/counter";
import { useEffect, useState } from "react";
import { addTodos, addTodo, removeTodo } from "./reducers/todos/todos"
import axios from "axios";

function App() {
  const [counter , setCounter]= useState();
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
    };
  });
  const inc = () => {
    dispatch(incCounter(1));
  };
  const dec = () => {
    dispatch(decCounter(1));
  };
  const reset = () => {
    dispatch(resetCounter());
  };
// ________________________________
  const addTodo = () => {
    const todo = {
    
    };

    dispatch(addTodo(todo));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        dispatch(addTodos(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
// ____________________________________

  return (
  <div className="App">
    <div className="counter">
        <h2>{state.counter}</h2>
        <button onClick={inc}>Increase 1</button>
        <button onClick={dec}>Decrease 1</button>
        <button onClick={reset}>Reset</button>
      </div>


      {state.todos.map((element) => {
        return (
          <div className="todo">
            <p>
              Task # {element.id}
              <br/>
              {element.title.toUpperCase()}
            </p>
            <button
              onClick={() => {
                dispatch(removeTodo(element));
              }}
            >
              Remove Todo
            </button>
          </div>
        );
      })}

  </div>
   
  );
}

export default App;
