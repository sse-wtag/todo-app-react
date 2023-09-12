import TaskBoardAction from "@components/TaskBoardAction";
import Tasks from "@components/Tasks";
import { useState } from "react";
import "./style.css";

function TaskBoard() {
    const [isTaskCreating, setIsTaskCreating] = useState(false);

    const toggleCreation = () => {
        setIsTaskCreating((prevIsTaskCreating) => !prevIsTaskCreating);
    };

    return (
        <div className="task-board-container">
            <h1 className="task-board-heading">Add Tasks</h1>
            <TaskBoardAction onTaskCreation={toggleCreation} />
            <Tasks isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
        </div>
    );
}

export default TaskBoard;
