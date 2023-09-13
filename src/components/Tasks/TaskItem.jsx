import Button from "@components/ui/form/button";
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
            <h2>{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
            <div className="task-list__action">
                <Button onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;
