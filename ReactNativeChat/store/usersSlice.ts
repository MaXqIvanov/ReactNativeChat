import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategoryAsync:any = createAsyncThunk(
  'prood/getCategoryAsync',
  async (params:any, state:any) => { // here you have two arguments
  },
)


const proodSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as any [],
  },
  reducers: {
    getUsers(state, action) {
    },
  },
  extraReducers: {
    [getCategoryAsync.pending]: (state:any, action:any) => {
    },
    [getCategoryAsync.fulfilled]: (state:any, { payload }:any) => {
    },
    [getCategoryAsync.rejected]: (state:any, action: any) => {
    },
  }
});

export default proodSlice.reducer;
export const { } =
proodSlice.actions;