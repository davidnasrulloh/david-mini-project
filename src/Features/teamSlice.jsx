import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
    name: "team",
    initialState: {
        cards: [],
    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        },
    },
});

export const { setCards } = teamSlice.actions;

export default teamSlice.reducer;