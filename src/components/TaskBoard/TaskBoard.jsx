import { useState } from "react";
import TaskList from "@components/TaskList";
import { Button } from "@components/ui/form";
import "./TaskBoard.scss";

function TaskBoard() {
    const [isTaskCreating, setIsTaskCreating] = useState(false);

    const toggleCreation = () => {
        setIsTaskCreating((prevIsTaskCreating) => !prevIsTaskCreating);
    };

    return (
        <section className="task-board">
            <h1 className="task-board__heading">Add Tasks</h1>
            <div className="task-board__action-wrapper">
                <Button onClick={toggleCreation}>Create</Button>
                <div className="task-board__filter-buttons">
                    <Button>all</Button>
                    <Button>incomplete</Button>
                    <Button>complete</Button>
                </div>
            </div>

            <TaskList isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
        </section>
    );
}

export default TaskBoard;
