import { TASK_STATE_COMPLETE, TASK_STATE_INCOMPLETE } from "@helpers/constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state) => state.todo.tasks;

export const selectFilteredTasks = createSelector(
    selectAllTasks,
    (state, filterState) => filterState,
    (allTasks, filterState) => {
        if (filterState === TASK_STATE_COMPLETE) {
            return allTasks.filter((task) => task.isCompleted);
        } else if (filterState === TASK_STATE_INCOMPLETE) {
            return allTasks.filter((task) => !task.isCompleted);
        }

        return allTasks;
    },
);
