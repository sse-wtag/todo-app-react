import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TaskCard from "@components/TaskCard";
import CreateTaskCard from "@components/CreateTaskCard";
import "./TaskList.scss";

const INVALID_EDITING_ID = -1;

function TaskList({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [editingId, setEditingId] = useState(INVALID_EDITING_ID);

    const toggleEditing = (taskId) => {
        setEditingId((prevEditingId) => {
            return prevEditingId === INVALID_EDITING_ID ? taskId : INVALID_EDITING_ID;
        });
    };

    const taskItems = tasks.map((task) => {
        return (
            <TaskCard
                key={task.id}
                task={task}
                isEditing={Boolean(editingId === task.id)}
                onToggleEditing={toggleEditing}
            />
        );
    });

    return (
        <div className="task-grid">
            {isTaskCreating && <CreateTaskCard onTaskCreation={onTaskCreation} />}
            {taskItems}
        </div>
    );
}

TaskList.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskList;
