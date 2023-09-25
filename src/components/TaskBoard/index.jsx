import PropTypes from "prop-types";
import { useState } from "react";
import TaskBoardAction from "@components/TaskBoardAction";
import Tasks from "@components/Tasks";
import SpinnerIcon from "@components/ui/icons/SpinnerIcon";
import "./style.scss";

function TaskBoard({ isSearching }) {
    const [isTaskCreating, setIsTaskCreating] = useState(false);

    const toggleCreation = () => {
        setIsTaskCreating((prevIsTaskCreating) => !prevIsTaskCreating);
    };

    return (
        <div className="task-board">
            <h1 className="task-board__heading">Add Tasks</h1>
            <TaskBoardAction isDisabled={isSearching} onTaskCreation={toggleCreation} />
            <Tasks isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
            {isSearching && (
                <div className="task-board__loader-wrapper">
                    <SpinnerIcon className="task-board__loader" />
                </div>
            )}
        </div>
    );
}

TaskBoard.propTypes = {
    isSearching: PropTypes.bool.isRequired,
};

export default TaskBoard;
