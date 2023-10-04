import { TASK_STATE_COMPLETE, TASK_STATE_INCOMPLETE } from "@helpers/constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state) => state.todo.tasks;

export const selectFilteredTasks = createSelector(
    selectAllTasks,
    (state, filterState) => filterState,
    (state, filterState, textToSearch) => textToSearch,
    (allTasks, filterState, textToSearch) => {
        let searchedTask = allTasks;

        if (textToSearch) {
            searchedTask = allTasks.filter((task) => task.title.toLowerCase().includes(textToSearch.toLowerCase()));
        }

        if (filterState === TASK_STATE_COMPLETE) {
            return searchedTask.filter((task) => task.isCompleted);
        } else if (filterState === TASK_STATE_INCOMPLETE) {
            return searchedTask.filter((task) => !task.isCompleted);
        }

        return searchedTask;
    },
);
