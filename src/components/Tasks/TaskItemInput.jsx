import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@features/task/taskSlice";
import { sanitizeAndTrim } from "@utils/sanitizeAndTrim";
import Button from "@components/ui/form/button";
import TextArea from "@components/ui/form/TextArea";

function TaskItemInput({ onTaskCreation }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const resetInput = () => {
        setTitle("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const cleanTitle = sanitizeAndTrim(title);

        if (cleanTitle === "") {
            resetInput();
            return;
        }

        const newTask = {
            id: Date.now().toString(),
            title: cleanTitle,
            createdAt: new Date().toISOString(),
            isCompleted: false,
        };

        dispatch(addTask(newTask));
        resetInput();
        onTaskCreation();
    };

    const handleTextareaKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <form className="task-card" onSubmit={handleSubmit}>
            <TextArea
                className="task-card__input"
                value={title}
                onChange={handleTitleChange}
                autoFocus
                required
                onKeyDown={handleTextareaKeyDown}
            />
            <Button type="submit">Add task</Button>
        </form>
    );
}

TaskItemInput.propTypes = {
    onTaskCreation: PropTypes.func.isRequired,
};

export default TaskItemInput;
