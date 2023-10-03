import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TaskCard from "@components/TaskCard";
import CreateTaskCard from "@components/CreateTaskCard";
import "./TaskList.scss";

function TaskList({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.todo.tasks);

    const taskCards = tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
    });

    return (
        <div className="task-grid">
            {isTaskCreating && <CreateTaskCard onTaskCreation={onTaskCreation} />}
            {taskCards}
        </div>
    );
}

TaskList.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskList;
