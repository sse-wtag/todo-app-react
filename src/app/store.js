import filterReducer from "@features/filter/filterSlice";
import taskReducer from "@features/task/taskSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todo: taskReducer,
        filter: filterReducer,
    },
});

export default store;
