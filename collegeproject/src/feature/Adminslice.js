import { createSlice } from "@reduxjs/toolkit";



export const Adminslice = createSlice({
    name: "adminSlice",
    initialState: {
        Admindetails: [],
        userDashboard: []
    },
    reducers: {
        eventCreate: (state, action) => {
            state.Admindetails = action.payload;
            // console.log("event", action.payload)
        },
        userDashboard: (state, action) => {
            // state.userDashboard.splice(0, 19);
            state.userDashboard.push(action.payload);
            // console.log("user details", action.payload)
        }
    }
})


export let { eventCreate, userDashboard } = Adminslice.actions;
export default Adminslice.reducer;