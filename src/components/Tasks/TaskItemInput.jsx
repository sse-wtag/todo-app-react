import Button from "@components/ui/form/button";

function TaskItemInput() {
    return (
        <div className="task-card-item">
            <input type="text" />
            <Button>Add task</Button>
        </div>
    );
}

export default TaskItemInput;
