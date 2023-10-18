import PropTypes from "prop-types";
import formatDate from "@helpers/formatting/formatDate";
import "@components/TaskList/TaskList.scss";

function TaskCard({ task }) {
    const { title, createdAt } = task;

    return (
        <div className="task-card">
            <h2 className="task-card__title">{title}</h2>
            <span>Created At: {formatDate(createdAt)}</span>
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        createdAt: PropTypes.string,
    }).isRequired,
};

export default TaskCard;
