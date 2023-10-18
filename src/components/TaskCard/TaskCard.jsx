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
    const daysElapsed = compareDates(currentDate, completedAt);
    const pluralizedDayText = daysElapsed === 1 ? "day" : "days";

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    const handleMarkAsDone = () => {
        dispatch(markAsDone(id));
    };

    return (
        <div className="task-card">
            <h2
                className={classNames("task-card__title", {
                    "task-card__title--complete": isCompleted,
                })}
            >
                {title}
            </h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__body">
                <div className="task-card__actions-wrapper">
                    {!isCompleted && <IconButton icon={<CheckIcon />} onClick={handleMarkAsDone} />}
                    <IconButton icon={<TrashIcon />} onClick={handleDelete} />
                </div>
            </div>
            {completedAt && (
                <span>
                    Completed in {daysElapsed === null ? "N/A" : daysElapsed} {pluralizedDayText}
                </span>
            )}
        </div>
    );
}

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
