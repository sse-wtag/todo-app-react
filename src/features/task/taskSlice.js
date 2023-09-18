import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: "1", title: "Task 01", createdAt: new Date().toUTCString() },
        { id: "2", title: "Task 02", createdAt: new Date().toUTCString() },
        { id: "3", title: "Task 03", createdAt: new Date().toUTCString() },
        { id: "4", title: "Task 04", createdAt: new Date().toUTCString() },
        { id: "5", title: "Task 05", createdAt: new Date().toUTCString() },
        { id: "6", title: "Task 06", createdAt: new Date().toUTCString() },
        { id: "7", title: "Task 07", createdAt: new Date().toUTCString() },
        { id: "8", title: "Task 08", createdAt: new Date().toUTCString() },
        { id: "9", title: "Task 09", createdAt: new Date().toUTCString() },
        { id: "10", title: "Task 10", createdAt: new Date().toUTCString() },

        { id: "11", title: "Task 11", createdAt: new Date().toUTCString() },
        { id: "12", title: "Task 12", createdAt: new Date().toUTCString() },
        { id: "13", title: "Task 13", createdAt: new Date().toUTCString() },
        { id: "14", title: "Task 14", createdAt: new Date().toUTCString() },
        { id: "15", title: "Task 15", createdAt: new Date().toUTCString() },
        { id: "16", title: "Task 16", createdAt: new Date().toUTCString() },
        { id: "17", title: "Task 17", createdAt: new Date().toUTCString() },
        { id: "18", title: "Task 18", createdAt: new Date().toUTCString() },
        { id: "19", title: "Task 19", createdAt: new Date().toUTCString() },
        { id: "20", title: "Task 20", createdAt: new Date().toUTCString() },
    ],
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
