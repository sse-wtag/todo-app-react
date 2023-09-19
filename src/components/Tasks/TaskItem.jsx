import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { compareDates } from "@utils/compareDates";
import { formatDate } from "@utils/formatDate";
import IconButton from "@components/ui/form/IconButton";
import TextArea from "@components/ui/form/TextArea";
import Button from "@components/ui/form/button";
import { CheckIcon, PencilIcon, TrashIcon } from "@components/ui/icons";
import { deleteTask, markAsDone, updateTask } from "@features/task/taskSlice";
import "./style.scss";

function TaskItem({ task = {}, isEditing, onToggleEditing }) {
    const { id, title, createdAt, isCompleted, completedAt } = task;
    const dispatch = useDispatch();
    const now = new Date().toISOString();
    const [editTitle, setEditTitle] = useState(title);

    const handleTitleChange = (event) => {
        setEditTitle(event.target.value);
    };

    const editTask = () => {
        dispatch(updateTask({ id, editTitle }));
    };

    const handleToggleEdit = () => {
        if (isEditing) {
            editTask();
        }
        onToggleEditing(id);
    };

    const handleDelete = () => {
        if (isEditing) {
            onToggleEditing(id);
            return;
        }
        dispatch(deleteTask(id));
    };

    const handleMarkAsDone = () => {
        if (isEditing) {
            editTask();
            onToggleEditing(id);
        }
        dispatch(markAsDone(id));
    };

    return (
        <div className={`task-card ${isCompleted && "task-card--complete"}`}>
            {isEditing ? (
                <TextArea value={editTitle} onChange={handleTitleChange} />
            ) : (
                <h2 className="task-card__title">{title}</h2>
            )}

            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__action">
                {isEditing && <Button onClick={handleToggleEdit}>Save</Button>}
                {!isCompleted && (
                    <IconButton onClick={handleMarkAsDone}>
                        <CheckIcon />
                    </IconButton>
                )}

                {!isEditing && !isCompleted && (
                    <IconButton onClick={handleToggleEdit}>
                        <PencilIcon />
                    </IconButton>
                )}

                <IconButton onClick={handleDelete}>
                    <TrashIcon />
                </IconButton>
            </div>
            {completedAt && <span>Completed in {compareDates(now, completedAt)} days</span>}
        </div>
    );
}

TaskItem.defaultProps = {
    task: {},
};

TaskItem.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
    task: PropTypes.shape({
        title: PropTypes.string,
        createdAt: PropTypes.string,
    }),
};

export default TaskItem;
