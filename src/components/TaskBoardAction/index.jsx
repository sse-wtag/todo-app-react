import PropTypes from "prop-types";
import Button from "@components/ui/form/button";
import { useDispatch } from "react-redux";
import { filterTask } from "@features/filter/filterSlice";

function TaskBoardAction({ onTaskCreation }) {
    const dispatch = useDispatch();

    const handleFilterClick = (filterState) => {
        dispatch(filterTask(filterState));
    };

    return (
        <section className="task-board__action-wrapper">
            <Button onClick={onTaskCreation}>Create</Button>
            <div className="task-board__filter-buttons">
                <Button onClick={() => handleFilterClick("all")}>All</Button>
                <Button onClick={() => handleFilterClick("incomplete")}>Incomplete</Button>
                <Button onClick={() => handleFilterClick("complete")}>Complete</Button>
            </div>
        </section>
    );
}

TaskBoardAction.propTypes = {
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskBoardAction;
