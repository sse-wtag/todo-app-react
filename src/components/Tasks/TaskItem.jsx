import { formatDate } from "@utils/FormatDate.js";
import PropTypes from "prop-types";
import "./style.css";

function TaskItem({ task = {} }) {
    const { title, createdAt } = task;

    return (
        <div className="task-card-item">
            <h2>{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;
