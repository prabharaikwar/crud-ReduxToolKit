import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.allUsers = action.payload;
    },

    getUser:(state, action)=>{
      state.allUsers = [...state.allUsers, ...action.payload]; 
      console.log(state.allUsers,'usersa')
    },

  
    editUser: (state, action) => {
      const { id, inputData } = action.payload;
      const updatedUsers = state.allUsers.map((user) =>
        user.id === parseInt(id) ? { ...user, ...inputData } : user
      );
      return {
        ...state,
        allUsers: updatedUsers,
      };
    },
    addUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
    removeUser: (state, action) => {
      console.log(action.payload)
      const deletedUsers = state.allUsers.filter((user) => user.id !== action.payload);
      state.allUsers = deletedUsers;
      console.log(deletedUsers,'delete')
    },
  },
});

export const { fetchDataSuccess, editUser, addUser, removeUser,getUser } = usersSlice.actions;

export default usersSlice.reducer;
