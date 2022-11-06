import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    id_user: "",
    display_name: "",
    email: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        user: {
            initialValue,
        }
    },

    reducers: {
        signUpOrLogin(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
            state = {
                isLoggedIn: false,
                user: {
                    initialValue,
                }
            }
        }
    }
}
)

export const { signUpOrLogin, logOut } = userSlice.actions
export default userSlice.reducer


