import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:3000/users';

export const fetchUsers = createAsyncThunk('crud/fetchUsers', async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addUser = createAsyncThunk('crud/addUser', async (user) => {
  const res = await axios.post(API, user);
  return res.data;
});

export const updateUser = createAsyncThunk('crud/updateUser', async (user) => {
  const res = await axios.put(`${API}/${user.id}`, user);
  return res.data;
});

export const deleteUser = createAsyncThunk('crud/deleteUser', async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const crudSlice = createSlice({
  name: 'crud',
  initialState: { users: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(u => u.id === action.payload.id);
        state.users[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(u => u.id !== action.payload);
      });
  }
});

export default crudSlice.reducer;
