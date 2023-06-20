import { useState } from "react";
import { TrashIcon } from '@heroicons/react/24/outline'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodo(updatedTodos);
  }

  return (
    <div className="w-fit px-4 flex justify-center mt-10 bg-white lg:max-w-lg lg:w-[410px] h-[500px] lg:max-h-[500px] overflow-auto rounded-lg p-6">
      <div className="mx-auto text-center px-6 rounded-lg">
        <h1 className="text-4xl text-black font-medium mb-8">To do List</h1>

        <form onSubmit={handleForm} className="flex gap-10 mb-5">
          <input
            className="input-task"
            type="text"
            placeholder="Add todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required />
          <button
            type="submit"
            className="button text-white px-8 rounded-lg h-10"
          >
            +
          </button>
        </form>
        <div className="todo-wrapper">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (

                <li
                  key={index}
                  className="task-list-item mb-5 bg-white text-black rounded-lg text-lg flex justify-between"
                >

                  {singleTodo.todoName}{" "}

                  <span onClick={() => deleteTodo(singleTodo.todoName)}> <TrashIcon className="h-5 w-5 cursor-pointer text-gray-500" /></span>

                </li>

              );
            })}
          </ul>
        </div>
      </div >
    </div >
  );
}

export default App;
