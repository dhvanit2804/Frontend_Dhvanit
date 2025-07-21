import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../../store/crudSlice';

function CrudApp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState(null);

  const { users } = useSelector(state => state.crud);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSubmit = () => {
    if (editId) {
      dispatch(updateUser({ id: editId, name, email }));
      setEditId(null);
    } else {
      dispatch(addUser({ name, email }));
    }
    setName('');
    setEmail('');
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">CRUD App (Redux Toolkit + JSON Server)</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 mr-2" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 mr-2" />
      <button onClick={handleSubmit} className="bg-purple-500 text-white px-4 py-2 rounded">
        {editId ? "Update" : "Add"}
      </button>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center mt-2">
            <span>{user.name} ({user.email})</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(user)} className="text-yellow-500">Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
