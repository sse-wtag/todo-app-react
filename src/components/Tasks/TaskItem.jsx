import PropTypes from "prop-types";
import { formatDate } from "@utils/formatDate";
import "./style.scss";

function TaskItem({ task }) {
    const { title, createdAt } = task;

    return (
        <div className="task-list__item">
            <h2 className="task-list__item--title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
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
