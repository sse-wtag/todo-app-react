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
            const taskToMarkAsDone = state.tasks.find((task) => task.id === taskIdToMarkAsDone);

            if (taskToMarkAsDone) {
                taskToMarkAsDone.isCompleted = true;
                taskToMarkAsDone.completedAt = new Date().toISOString();
            }
        },
        updateTask: (state, action) => {
            const { id: editId, editTitle } = action.payload;
            const taskToEdit = state.tasks.find((task) => task.id === editId);

            if (taskToEdit) {
                taskToEdit.title = editTitle;
            }
        },
    },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, markAsDone, updateTask } = taskSlice.actions;
