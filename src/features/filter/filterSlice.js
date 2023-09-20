import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    state: "all",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterTask: (state, action) => {
            state.state = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterTask } = filterSlice.actions;
