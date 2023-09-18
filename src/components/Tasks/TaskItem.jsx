import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { compareDates } from "@utils/compareDates";
import { formatDate } from "@utils/formatDate.js";
import { deleteTask, markAsDone, updateTask } from "@features/task/taskSlice";
import Button from "@components/ui/form/button";
import CheckIcon from "@components/ui/icons/CheckIcon";
import IconButton from "@components/ui/form/IconButton";
import PencilIcon from "@components/ui/icons/PencilIcon";
import TrashIcon from "@components/ui/icons/TrashIcon";
import TextArea from "@components/ui/form/TextArea";
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
        <div className="task-list__item">
            {isEditing ? (
                <TextArea value={editTitle} onChange={handleTitleChange} />
            ) : (
                <h2 className={isCompleted ? "task-list__item--completed" : "task-list__item--title"}>{title}</h2>
            )}

            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-list__action">
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

TaskItem.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
    task: PropTypes.shape({
        title: PropTypes.string,
        createdAt: PropTypes.string,
    }),
};

export default TaskItem;
