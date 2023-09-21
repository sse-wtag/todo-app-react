import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import "./style.scss";

const INVALID_EDITING_ID = -1;

function Tasks({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [editingId, setEditingId] = useState(INVALID_EDITING_ID);

    const toggleEditing = (taskId) => {
        setEditingId((prevEditingId) => {
            return prevEditingId === INVALID_EDITING_ID ? taskId : INVALID_EDITING_ID;
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
