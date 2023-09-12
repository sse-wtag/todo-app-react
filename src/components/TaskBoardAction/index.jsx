import Button from "@components/ui/form/button";
import PropTypes from "prop-types";
import "./style.css";

function TaskBoardAction({ onTaskCreation }) {
    return (
        <section className="task-board-action-wrapper">
            <Button onClick={onTaskCreation}>Create</Button>
            <div className="task-board-filter">
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
