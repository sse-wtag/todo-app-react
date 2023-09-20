export const selectAllTasks = (state) => state.tasks.tasks;
export const selectCompletedTasks = (state) => state.tasks.tasks.filter((task) => task.isCompleted);
export const selectInCompletedTasks = (state) => state.tasks.tasks.filter((task) => !task.isCompleted);
