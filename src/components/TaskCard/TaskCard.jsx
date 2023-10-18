import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "@features/task/taskSlice";
import formatDate from "@helpers/formatting/formatDate";
import IconButton from "@components/ui/form/IconButton";
import { TrashIcon } from "@components/ui/icons";
import "@components/TaskCard/TaskCard.scss";

function TaskCard({ task }) {
    const { id, title, createdAt } = task;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="task-card">
            <h2 className="task-card__title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-card__body">
                <div className="task-card__actions-wrapper">
                    <IconButton icon={<TrashIcon />} onClick={handleDelete} />
                </div>
            </div>
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
    }),
};

export default TaskCard;
