import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil/todoAtom';

import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) =>
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));

  const removeTodo = (id) =>
    setTodos(todos.filter(todo => todo.id !== id));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Recoil Todo App</h2>
      <input className="border p-2" value={input} onChange={e => setInput(e.target.value)} placeholder="Add task" />
      <button onClick={addTodo} className="bg-green-500 px-4 py-2 text-white rounded">Add</button>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between">
            <span className={todo.completed ? 'line-through' : ''} onClick={() => toggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
