import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import TaskList from "@components/TaskList";
import { Button } from "@components/ui/form";
import { SpinnerIcon } from "@components/ui/icons";
import { filterTask } from "@features/filter/filterSlice";
import { TASK_STATE_ALL, TASK_STATE_COMPLETE, TASK_STATE_INCOMPLETE } from "@helpers/constants";
import "./TaskBoard.scss";

function TaskBoard({ isSearching }) {
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
                <Button disabled={isSearching} onClick={toggleCreation}>
                    Create
                </Button>
                <div className="task-board__filter-buttons">
                    <Button disabled={isSearching} onClick={() => handleFilterClick(TASK_STATE_ALL)}>
                        {TASK_STATE_ALL}
                    </Button>
                    <Button disabled={isSearching} onClick={() => handleFilterClick(TASK_STATE_INCOMPLETE)}>
                        {TASK_STATE_INCOMPLETE}
                    </Button>
                    <Button disabled={isSearching} onClick={() => handleFilterClick(TASK_STATE_COMPLETE)}>
                        {TASK_STATE_COMPLETE}
                    </Button>
                </div>
            </div>

            <TaskList isDisabled={isSearching} isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />

            {isSearching && (
                <div className="task-board__loader-wrapper">
                    <SpinnerIcon className="task-board__loader" />
                </div>
            )}
        </section>
    );
}

TaskBoard.defaultProps = {
    isSearching: false,
};

TaskBoard.propTypes = {
    isSearching: PropTypes.bool,
};

export default TaskBoard;
