import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
}

export const loginSlice = createSlice({
  name: 'loginSchema',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;