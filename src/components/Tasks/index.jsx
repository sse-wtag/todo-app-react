import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import "./style.css";

function Tasks() {
    return (
        <div className="task-container">
            <TaskItemInput />
            <TaskItem />
            <TaskItem />
        </div>
    );
}

export default Tasks;
