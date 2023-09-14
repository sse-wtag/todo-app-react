import IconButton from "@components/ui/form/IconButton";
import CheckIcon from "@components/ui/icons/CheckIcon";
import TrashIcon from "@components/ui/icons/TrashIcon";
import { deleteTask, markAsDone } from "@features/task/taskSlice";
import { formatDate } from "@utils/formatDate.js";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./style.scss";

function TaskItem({ task = {} }) {
    const { id, title, createdAt, isCompleted } = task;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    const handleMarkAsDone = () => {
        dispatch(markAsDone(id));
    };

    return (
        <div className="task-list__item">
            <h2 className={isCompleted && "task-list__item--completed"}>{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-list__action">
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
    );
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;
