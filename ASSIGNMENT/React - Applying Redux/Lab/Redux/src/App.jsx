import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CounterApp from './components/CounterApp/CounterApp';
import TodoApp from './components/TodoApp/TodoApp';
import CrudApp from './components/CrudApp/CrudApp';

function App() {
  return (
    <BrowserRouter>
      <div className="p-6 space-y-6">
        <nav className="space-x-4">
          <Link to="/counter" className="text-blue-500">Counter</Link>
          <Link to="/todo" className="text-green-500">Todo</Link>
          <Link to="/crud" className="text-purple-500">CRUD</Link>
        </nav>
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/crud" element={<CrudApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
