import { useState } from "react";
import TaskList from "@components/TaskList";
import "./TaskBoard.scss";
import { Button } from "@components/ui/form";

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
                    <Button>All</Button>
                    <Button>Incomplete</Button>
                    <Button>Complete</Button>
                </div>
            </div>

            <TaskList isTaskCreating={isTaskCreating} onTaskCreation={toggleCreation} />
        </section>
    );
}

export default TaskBoard;
