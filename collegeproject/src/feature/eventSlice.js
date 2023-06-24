import { createSlice } from "@reduxjs/toolkit";


export let eventSlice = createSlice({
    name: " eventDetails",
    initialState: {// this initialState/initialvalue is availabel in cartShow key on reducer
        initialEvent: [],
        wishListEvent: [],

        // items: user
    },
    reducers: {
        Login: {
            isAuth: true
        },
        Logout: {
            isAuth: false
        },
        eventdetails: (state, action) => {
            state.initialEvent = action.payload;


        },
        wishEvent: (state, action) => {

            const id = state.wishListEvent.map(item => item.id);
            const alreadyPresentEventIndex = id.findIndex(item => item === action.payload.id)


            // Logic for checking  an event is present or not inside an wishListEvent arrar😁
            if (alreadyPresentEventIndex !== -1) {

                state.wishListEvent.splice(alreadyPresentEventIndex, 1);
                // console.log("event is present")
            }
            else {
                state.wishListEvent.push(action.payload);

            }



            // console.log("action.payload", action.payload.id);
            console.log("state.wishlistEevent", state.wishListEvent);

            console.log("alreadyPresentEventIndex", alreadyPresentEventIndex);







        }

    }

})

export let { eventdetails, wishEvent, Login, Logout } = eventSlice.actions;
export default eventSlice.reducer;