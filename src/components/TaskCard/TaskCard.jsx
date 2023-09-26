import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, TextArea } from "@components/ui/form";
import IconButton from "@components/ui/form/IconButton";
import { CheckIcon, PencilIcon, TrashIcon } from "@components/ui/icons";
import { deleteTask, markAsDone, updateTask } from "@features/task/taskSlice";
import formatDate from "@helpers/formatting/formatDate";
import { compareDates } from "@helpers/operations/compareDates";
import "@components/TaskCard/TaskCard.scss";

function TaskCard({ task, isEditing, onToggleEditing }) {
    const { id, title, createdAt, isCompleted, completedAt } = task;
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState(title);

    const now = new Date().toISOString();
    const dayDifference = compareDates(now, completedAt);
    const dayDifferenceText = dayDifference === 1 ? "day" : "days";

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
        <div
            className={classNames({
                "task-card": true,
                "task-card--complete": isCompleted,
            })}
        >
            {isEditing ? (
                <TextArea className="task-card__input" value={editTitle} onChange={handleTitleChange} />
            ) : (
                <h2 className="task-card__title">{title}</h2>
            )}
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__body">
                <div className="task-card__actions-wrapper">
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
            </div>
            {completedAt && (
                <span>
                    Completed in {dayDifference} {dayDifferenceText}
                </span>
            )}
        </div>
    );
}

TaskCard.defaultProps = {
    task: {},
};

TaskCard.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        completedAt: PropTypes.string,
        isCompleted: PropTypes.bool,
    }),
};

export default TaskCard;
