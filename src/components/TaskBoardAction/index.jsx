import PropTypes from "prop-types";
import Button from "@components/ui/form/button";
import { useDispatch } from "react-redux";
import { filterTask } from "@features/filter/filterSlice";
import { TASK_STATE_ALL, TASK_STATE_COMPLETE, TASK_STATE_INCOMPLETE } from "@helpers/constants";

function TaskBoardAction({ isDisabled, onTaskCreation }) {
    const dispatch = useDispatch();

    const handleFilterClick = (filterState) => {
        dispatch(filterTask(filterState));
    };

    return (
        <section className="task-board__action-wrapper">
            <Button disabled={isDisabled} onClick={onTaskCreation}>
                Create
            </Button>
            <div className="task-board__filter-buttons">
                <Button disabled={isDisabled} onClick={() => handleFilterClick(TASK_STATE_ALL)}>
                    All
                </Button>
                <Button disabled={isDisabled} onClick={() => handleFilterClick(TASK_STATE_INCOMPLETE)}>
                    Incomplete
                </Button>
                <Button disabled={isDisabled} onClick={() => handleFilterClick(TASK_STATE_COMPLETE)}>
                    Complete
                </Button>
            </div>
        </section>
    );
}

TaskBoardAction.defaultProps = {
    isDisabled: false,
};

TaskBoardAction.propTypes = {
    isDisabled: PropTypes.bool,
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskBoardAction;
