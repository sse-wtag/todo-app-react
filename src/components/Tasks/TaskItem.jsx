import IconButton from "@components/ui/form/IconButton";
import TrashIcon from "@components/ui/icons/TrashIcon";
import { deleteTask } from "@features/task/taskSlice";
import { formatDate } from "@utils/formatDate.js";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./style.scss";

function TaskItem({ task = {} }) {
    const { id, title, createdAt } = task;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="task-list__item">
            <h2 className="task-list__item--title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-list__action">
                <IconButton onClick={handleDelete}>
                    <TrashIcon />
                </IconButton>
            </div>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        createdAt: PropTypes.string,
    }),
};

export default TaskItem;
