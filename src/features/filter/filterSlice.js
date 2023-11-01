import { TASK_STATE_ALL } from "@helpers/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    isSearching: false,
    status: TASK_STATE_ALL,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterTask: (state, action) => {
            state.status = action.payload;
        },

        searchTask: (state, action) => {
            state.search = action.payload;
        },

        setSearching: (state, action) => {
            state.isSearching = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterTask, searchTask, setSearching } = filterSlice.actions;
