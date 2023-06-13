import { createSlice } from "@reduxjs/toolkit";


export let eventSlice = createSlice({
    name: " eventDetails",
    initialState: {// this initialState/initialvalue is availabel in cartShow key on reducer
        initialEvent: [],
        wishListEvent: {},
        storeWishevent: []
        // items: user
    },
    reducers: {
        eventdetails: (state, action) => {
            state.initialEvent = action.payload;


        },
        wishEvent: (state, action) => {
            // state.wishListEvent = action.payload;

            state.wishListEvent.splice(0, 10);


            //store wish event



            // console.log("state.wishListEvent id", state.storeWishevent);


        }

    }

})

export let { eventdetails, wishEvent } = eventSlice.actions;
export default eventSlice.reducer;