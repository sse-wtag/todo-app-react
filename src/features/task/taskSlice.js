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
        markAsDone: (state, action) => {
            const taskIdToMarkAsDone = action.payload;
            const taskIndexToMarkAsDone = state.tasks.findIndex((task) => task.id === taskIdToMarkAsDone);

            if (taskIndexToMarkAsDone === -1) {
                return;
            }

            state.tasks[taskIndexToMarkAsDone].isCompleted = true;
            state.tasks[taskIndexToMarkAsDone].completedAt = new Date().toISOString();
        },
        updateTask: (state, action) => {
            const { id: editId, editTitle } = action.payload;
            const taskIndexToUpdate = state.tasks.findIndex((task) => task.id === editId);

            if (taskIndexToUpdate === -1) {
                return;
            }

            state.tasks[taskIndexToUpdate].title = editTitle;
        },
    },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, markAsDone, updateTask } = taskSlice.actions;
