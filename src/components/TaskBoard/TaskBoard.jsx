import { useState } from "react";
import { useDispatch } from "react-redux";
import TaskList from "@components/TaskList";
import { Button } from "@components/ui/form";
import { filterTask } from "@features/filter/filterSlice";
import { TASK_STATE_ALL, TASK_STATE_COMPLETE, TASK_STATE_INCOMPLETE } from "@helpers/constants";
import "./TaskBoard.scss";

function TaskBoard() {
    const dispatch = useDispatch();
    const [isTaskCreating, setIsTaskCreating] = useState(false);

    const toggleCreation = () => {
        setIsTaskCreating((prevIsTaskCreating) => !prevIsTaskCreating);
    };

    const handleFilterClick = (filterState) => {
        dispatch(filterTask(filterState));
    };

    return (
        <section className="task-board">
            <h1 className="task-board__heading">Add Tasks</h1>
            <div className="task-board__action-wrapper">
                <Button onClick={toggleCreation}>Create</Button>
                <div className="task-board__filter-buttons">
                    <Button onClick={() => handleFilterClick(TASK_STATE_ALL)}>{TASK_STATE_ALL}</Button>
                    <Button onClick={() => handleFilterClick(TASK_STATE_INCOMPLETE)}>{TASK_STATE_INCOMPLETE}</Button>
                    <Button onClick={() => handleFilterClick(TASK_STATE_COMPLETE)}>{TASK_STATE_COMPLETE}</Button>
                </div>
            </div>

            <TaskList isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
        </section>
    );
}

export default TaskBoard;
