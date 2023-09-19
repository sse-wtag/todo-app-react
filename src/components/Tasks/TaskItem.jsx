import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { compareDates } from "@utils/compareDates";
import { formatDate } from "@utils/formatDate";
import IconButton from "@components/ui/form/IconButton";
import { CheckIcon, TrashIcon } from "@components/ui/icons";
import { deleteTask, markAsDone } from "@features/task/taskSlice";
import "./style.scss";

function TaskItem({ task = {} }) {
    const { id, title, createdAt, isCompleted, completedAt } = task;
    const dispatch = useDispatch();
    const now = new Date().toISOString();

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };
  
    const handleMarkAsDone = () => {
        dispatch(markAsDone(id));
    };

    return (
        <div className={`task-card ${isCompleted && "task-card--complete"}`}>
            <h2 className="task-card__title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__action">
                {!isCompleted && (
                    <IconButton onClick={handleMarkAsDone}>
                        <CheckIcon />
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
    task: PropTypes.shape({
        title: PropTypes.string,
        createdAt: PropTypes.string,
    }),
};

export default TaskItem;
