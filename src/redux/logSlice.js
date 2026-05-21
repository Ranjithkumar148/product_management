import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: "",
    isLogin: false
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        }
        
    }

})

export default userSlice.reducer
export const { loginUser } = userSlice.actions