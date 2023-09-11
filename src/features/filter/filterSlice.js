import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    state: "all",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {},
});

export default filterSlice.reducer;
