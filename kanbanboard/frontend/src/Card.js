import React, {useEffect, useState} from 'react';
import * as CardStyles from './assets/scss/Card.scss';
import TaskList from "./TaskList";
import update from "react-addons-update";

function Card ({no, title, description}) {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState(null);

    const addTask = async function(taskName) {
        const newTask = {
            no: null,
            name: taskName,
            done: 'N',
            cardNo: no
        };

        try {
            const response = await fetch('/api/task', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            setTasks([json.data, ...tasks]);
        } catch (error) {
            alert(`Failed to add task: ${error.message}`);
        }
    }

    const updateTaskStatusDone = async function(taskNo, done) {
        try {
            const response = await fetch(`/api/task/${taskNo}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `done=${done}`
            });

            console.log(response);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            const index = tasks.findIndex((task) => task.no === json.data.no);

            const updateTask = update(tasks, {
                [index]: {
                    done: {
                        $set: json.data.done
                    }
                }
            });

            setTasks(updateTask);
        } catch (error) {
            alert(`Failed to update task: ${error.message}`);
        }
    }

    const deleteTask = async function(taskNo) {
        try {
            const response = await fetch(`/api/task/${taskNo}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setTasks(tasks.filter((task) => task.no !== taskNo));
        } catch (error) {
            alert(`Failed to delete task: ${error.message}`);
        }
    }

    const taskClickEvent = async function() {
        if (!isOpen) {
            try {
                const response = await fetch(`/api/task?no=${no}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });

                const json = await response.json();
                setTasks(json.data);
            } catch (error) {
                alert(`Failed: ${error.message}`);
            }
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className={CardStyles._Card}>
            <div
                className={`${CardStyles.Card_Title} ${isOpen ? CardStyles.Card_Title_open : ''}`}
                onClick={taskClickEvent}
            >
                {title}
            </div>
            <div>
                {description}
            </div>
            {
                isOpen ?
                <TaskList tasks={tasks} addTask={addTask} updateTaskStatusDone={updateTaskStatusDone} deleteTask={deleteTask}/> : null
            }
        </div>
    );
}

export default Card;