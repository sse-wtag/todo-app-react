import PropTypes from "prop-types";
import Button from "@components/ui/form/button";
import "./style.scss";

function TaskBoardAction({ onTaskCreation }) {
    return (
        <section className="task-board-action">
            <Button onClick={onTaskCreation}>Create</Button>
            <div className="task-board-action__filter">
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
