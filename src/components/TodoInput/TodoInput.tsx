import React, {useState, KeyboardEvent, useContext} from "react";
import {v4} from "uuid";
import {TodoContext} from "../context";

export const TodoInput = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const {addTodo} = useContext(TodoContext);
    const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key !== "Enter") {
            return;
        }
        if (title === "") {
            setMessage("Not entered.");
            return;
        }
        const newTodo = {
            id: v4(),
            title,
            completed: false,
        };
        addTodo(newTodo);
        setTitle("");
        setMessage("");
    };

    return (
        <>
            <input
                className="new-todo"
                placeholder="what you need to do?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={keyDownHandler}
                autoFocus={true}
            />
            <div style={{color: "red"}}>{message}</div>
        </>
    );
};
