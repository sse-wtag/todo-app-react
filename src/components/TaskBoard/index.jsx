import TaskBoardAction from "@components/TaskBoardAction";
import Tasks from "@components/Tasks";
import "./style.css";

function TaskBoard() {
    return (
        <div className="task-board-container">
            <h1 className="task-board-heading">Add Tasks</h1>
            <TaskBoardAction />
            <Tasks />
        </div>
    );
}

export default TaskBoard;
