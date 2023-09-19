import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import "./style.scss";

function Tasks({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [editingId, setEditingId] = useState(-1);

    const toggleEditing = (taskId) => {
        setEditingId((prevEditingId) => {
            return prevEditingId === -1 ? taskId : -1;
        });
    };

    const taskItems = tasks.map((task) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
                isEditing={Boolean(editingId === task.id)}
                onToggleEditing={toggleEditing}
            />
        );
    });

    return (
        <div className="task-grid">
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
