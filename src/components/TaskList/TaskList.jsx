import { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskCard from "@components/TaskCard";
import CreateTaskCard from "@components/CreateTaskCard";
import { Button } from "@components/ui/form";
import { selectFilteredTasks } from "@features/task/taskSelectors";
import usePaginate from "@hooks/usePaginate";
import "./TaskList.scss";

const TASK_PER_PAGE = import.meta.env.VITE_TASK_PER_PAGE;

function TaskList({ isTaskCreating, onTaskCreation }) {
    const { state: filterState } = useSelector((state) => state.filter);
    const tasks = useSelector((state) => selectFilteredTasks(state, filterState));
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

    const taskCards = chunkedTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
    });

    useEffect(() => {
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterState]);

    return (
        <div className="task-list">
            <div className="task-list__grid">
                {isTaskCreating && <CreateTaskCard onTaskCreation={onTaskCreation} />}
                {taskCards}
            </div>

            {(hasMore || isLastPage) && (
                <div className="task-list__paginate-buttons">
                    {hasMore && <Button onClick={next}>Load More</Button>}
                    {isLastPage && <Button onClick={reset}>Show Less</Button>}
                </div>
            )}
        </div>
    );
}

TaskList.propTypes = {
    isTaskCreating: PropTypes.bool.isRequired,
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskList;
