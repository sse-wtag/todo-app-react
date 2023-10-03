import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TaskCard from "@components/TaskCard";
import CreateTaskCard from "@components/CreateTaskCard";
import "./TaskList.scss";
import usePaginate from "@hooks/usePaginate";
import { Button } from "@components/ui/form";

const TASK_PER_PAGE = import.meta.env.VITE_TASK_PER_PAGE;
function TaskList({ isTaskCreating, onTaskCreation }) {
    const tasks = useSelector((state) => state.todo.tasks);
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
