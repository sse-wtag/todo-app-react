import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
        },
        deleteTask: (state, action) => {
            const deletableTaskIndex = state.tasks.findIndex((task) => {
                return task.id === action.payload;
            });

            state.tasks.splice(deletableTaskIndex, 1);
        },
    },
});

export default taskSlice.reducer;
export const { addTask, deleteTask } = taskSlice.actions;
