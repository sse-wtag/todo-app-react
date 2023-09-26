import { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button, TextArea } from "@components/ui/form";
import IconButton from "@components/ui/form/IconButton";
import { CheckIcon, PencilIcon, TrashIcon } from "@components/ui/icons";
import { deleteTask, markAsDone, updateTask } from "@features/task/taskSlice";
import { ENTER_KEY } from "@helpers/constants";
import formatDate from "@helpers/formatting/formatDate";
import { compareDates } from "@helpers/operations/compareDates";
import purify from "@helpers/text/purify";
import { displayToaster } from "@helpers/utility/toaster";
import "@components/TaskCard/TaskCard.scss";

function TaskCard({ task, isDisabled }) {
    const { id, title, createdAt, isCompleted, completedAt } = task;
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

    const now = new Date().toISOString();
    const dayDifference = compareDates(now, completedAt);
    const dayDifferenceText = dayDifference === 1 ? "day" : "days";

    const handleTitleChange = (event) => {
        setEditTitle(event.target.value);
    };

    const turnOffEditing = () => {
        setIsEditing(false);
    };

    const editTask = () => {
        const purifiedEditTitle = purify(editTitle);

        if (purifiedEditTitle === "") {
            setEditTitle("");
            return;
        }

        dispatch(updateTask({ id, editTitle: purifiedEditTitle }));
        turnOffEditing();
        setEditTitle(purifiedEditTitle);
        displayToaster("Task is updated", "success");
    };

    const handleDelete = () => {
        if (isEditing) {
            turnOffEditing();
            return;
        }
        dispatch(deleteTask(id));
        displayToaster("Task is deleted", "error");
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleMarkAsDone = () => {
        if (isEditing) {
            editTask();
        }
        dispatch(markAsDone(id));
        displayToaster("Task is marked as done", "success");
    };

    const handleTextareaKeyDown = (event) => {
        if (event.key === ENTER_KEY && !event.shiftKey) {
            event.preventDefault();
            editTask();
        }
    };

    return (
        <div
            className={classNames({
                "task-card": true,
                "task-card--complete": isCompleted,
            })}
        >
            {isEditing ? (
                <TextArea
                    className="task-card__input"
                    value={editTitle}
                    onChange={handleTitleChange}
                    onKeyUp={handleTextareaKeyDown}
                    disabled={isDisabled}
                />
            ) : (
                <h2 className="task-card__title">{title}</h2>
            )}
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__body">
                <div className="task-card__actions-wrapper">
                    {isEditing && (
                        <Button onClick={editTask} disabled={isDisabled}>
                            Save
                        </Button>
                    )}

                    {!isCompleted && (
                        <IconButton onClick={handleMarkAsDone} disabled={isDisabled}>
                            <CheckIcon />
                        </IconButton>
                    )}

                    {!isEditing && !isCompleted && (
                        <IconButton onClick={handleEditClick} disabled={isDisabled}>
                            <PencilIcon />
                        </IconButton>
                    )}

                    <IconButton onClick={handleDelete} disabled={isDisabled}>
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
    isDisabled: false,
    task: {},
};

TaskCard.propTypes = {
    isDisabled: PropTypes.bool,
    task: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        completedAt: PropTypes.string,
        isCompleted: PropTypes.bool,
    }),
};

export default TaskCard;
