import PropTypes from "prop-types";
import { formatDate } from "@utils/formatDate.js";
import "./style.scss";

function TaskItem({ task = {} }) {
    const { title, createdAt } = task;

    return (
        <div className="task-list__item">
            <h2>{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
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
