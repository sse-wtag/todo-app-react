import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import "./style.scss";

function Tasks({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.tasks.tasks);
    const taskItems = tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
    });

    return (
        <div className="task-list">
            {isTaskCreating && <TaskItemInput onTaskCreation={onTaskCreation} />}
            {taskItems}
        </div>
    );
}

Tasks.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default Tasks;
