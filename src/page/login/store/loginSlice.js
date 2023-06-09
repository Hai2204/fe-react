import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    //   const response = await userAPI.fetchById(userId)
    return payload.userName
  }
)

const initialState = {
  user: null,
  token: null,
  isAuthenlicated: false,
  permissions: [
    {
      path: "/page.html"
    },
    {
      path: "/login.html"
    },
  ],
}

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    getPermission: (state, action) => {
      state.permissions = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.token = action.payload;
      state.isAuthenlicated = true;// change
    })
  },
})

export const getUser = state => state.user.user;
export const isAuthenlicated = state => state.user.isAuthenlicated;
export const getToken = state => state.user.token;
export const getAuthorizations = state => state.user.permissions;

export const { setToken, setUser } = loginSlice.actions

export default loginSlice.reducer