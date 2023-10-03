import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import IconButton from "@components/ui/form/IconButton";
import { CheckIcon, TrashIcon } from "@components/ui/icons";
import { deleteTask, markAsDone } from "@features/task/taskSlice";
import formatDate from "@helpers/formatting/formatDate";
import { compareDates } from "@helpers/operations/compareDates";
import "@components/TaskCard/TaskCard.scss";

function TaskCard({ task }) {
    const { id, title, createdAt, isCompleted, completedAt } = task;
    const dispatch = useDispatch();

    const currentDate = new Date().toISOString();
    const dayDifference = compareDates(currentDate, completedAt);
    const dayDifferenceText = dayDifference === 1 ? "day" : "days";

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    const handleMarkAsDone = () => {
        dispatch(markAsDone(id));
    };

    return (
        <div
            className={classNames({
                "task-card": true,
                "task-card--complete": isCompleted,
            })}
        >
            <h2 className="task-card__title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__body">
                <div className="task-card__actions-wrapper">
                    {!isCompleted && (
                        <IconButton onClick={handleMarkAsDone}>
                            <CheckIcon />
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
    task: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        completedAt: PropTypes.string,
        isCompleted: PropTypes.bool,
    }),
};

export default TaskCard;
