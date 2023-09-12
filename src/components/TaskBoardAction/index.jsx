import Button from "@components/ui/form/button";
import "./style.css";

function TaskBoardAction() {
    return (
        <section className="task-board-action-wrapper">
            <Button>Create</Button>
            <div className="task-board-filter">
                <Button>All</Button>
                <Button>Incomplete</Button>
                <Button>Complete</Button>
            </div>
        </section>
    );
}

export default TaskBoardAction;
