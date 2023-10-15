import { TASK_STATE_ALL } from "@helpers/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    status: TASK_STATE_ALL,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterTask: (state, action) => {
            state.status = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterTask } = filterSlice.actions;
