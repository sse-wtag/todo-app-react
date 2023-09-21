import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import Button from "@components/ui/form/button";
import usePaginate from "@hooks/usePaginate";
import "./style.scss";

const INVALID_EDITING_ID = -1;
const TASK_PER_PAGE = import.meta.env.VITE_TASK_PER_PAGE;

function Tasks({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [editingId, setEditingId] = useState(INVALID_EDITING_ID);
    const {
        data: chunkedTasks,
        hasMore,
        isLastPage,
        next,
        reset,
    } = usePaginate({
        collection: tasks,
        isCollectionCreating: isTaskCreating,
        perPage: TASK_PER_PAGE,
    });

    const toggleEditing = (taskId) => {
        setEditingId((prevEditingId) => {
            return prevEditingId === INVALID_EDITING_ID ? taskId : INVALID_EDITING_ID;
        });
    };

    const taskItems = chunkedTasks.map((task) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
                isEditing={Boolean(editingId === task.id)}
                onToggleEditing={toggleEditing}
            />
        );
    });

    return (
        <>
            <div className="task-grid">
                {isTaskCreating && <TaskItemInput onTaskCreation={onTaskCreation} />}
                {taskItems}
            </div>
            <div className="task-board__paginate-wrapper">
                {hasMore && <Button onClick={next}>Load More</Button>}
                {isLastPage && <Button onClick={reset}>Show Less</Button>}
            </div>
        </>
    );
}

Tasks.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default Tasks;
