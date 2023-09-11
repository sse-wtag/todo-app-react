import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import taskReducer from "../features/task/taskSlice";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer,
    },
});

export default store;
