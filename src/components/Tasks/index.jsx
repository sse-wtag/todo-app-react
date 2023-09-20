import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskItemInput from "./TaskItemInput";
import Button from "@components/ui/form/button";
import { selectAllTasks, selectCompletedTasks, selectInCompletedTasks } from "@features/task/taskSelectors";
import usePaginate from "@hooks/usePaginate";
import "./style.scss";

const TASK_PER_PAGE = import.meta.env.VITE_TASK_PER_PAGE;

function Tasks({ isTaskCreating, onTaskCreation }) {
    const filterState = useSelector((state) => state.filter.state);
    const tasks = useSelector((state) => {
        if (filterState === "complete") {
            return selectCompletedTasks(state);
        } else if (filterState === "incomplete") {
            return selectInCompletedTasks(state);
        }
        return selectAllTasks(state);
    });

    const [editingId, setEditingId] = useState(-1);
    const {
        data: chunkedTasks,
        setCurrentPage,
        hasMore,
        isLastPage,
    } = usePaginate({
        collection: tasks,
        perPage: TASK_PER_PAGE,
    });

    const toggleEditing = (taskId) => {
        setEditingId((prevEditingId) => {
            return prevEditingId === -1 ? taskId : -1;
        });
    };

    const loadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const showLess = () => {
        setCurrentPage(1);
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
                {hasMore && <Button onClick={loadMore}>Load More</Button>}
                {isLastPage && <Button onClick={showLess}>Show Less</Button>}
            </div>
        </>
    );
}

Tasks.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default Tasks;
