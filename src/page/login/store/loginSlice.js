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
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.token = action.payload;
    })
  },
})

export const getUser = state => state.user.user;
export const getToken = state => state.user.token;

// Action creators are generated for each case reducer function
export const { setToken, setUser, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer