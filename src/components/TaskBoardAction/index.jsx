import PropTypes from "prop-types";
import Button from "@components/ui/form/button";

function TaskBoardAction({ onTaskCreation }) {
    return (
        <section className="task-board__action-wrapper">
            <Button onClick={onTaskCreation}>Create</Button>
            <div className="task-board__filter-buttons">
                <Button>All</Button>
                <Button>Incomplete</Button>
                <Button>Complete</Button>
            </div>
        </section>
    );
}

TaskBoardAction.propTypes = {
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskBoardAction;
