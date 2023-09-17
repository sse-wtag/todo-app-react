import { useState } from "react";
import TaskBoardAction from "@components/TaskBoardAction";
import Tasks from "@components/Tasks";
import "./style.scss";

function TaskBoard() {
    const [isTaskCreating, setIsTaskCreating] = useState(false);

    const toggleCreation = () => {
        setIsTaskCreating((prevIsTaskCreating) => !prevIsTaskCreating);
    };

    return (
        <div className="task-board">
            <h1 className="task-board__heading">Add Tasks</h1>
            <TaskBoardAction onTaskCreation={toggleCreation} />
            <Tasks isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
        </div>
    );
}

export default TaskBoard;
