import React, {useState} from 'react';
import * as TaskStyles from './assets/scss/Task.scss';

function Task({no, name, done, updateTaskStatusDone, deleteTask}) {
    return (
        <li className={TaskStyles._Task}>
            <input
                type='checkbox'
                checked={done === 'Y'}
                onChange={(e) => {updateTaskStatusDone(no, e.target.checked ? 'Y' : 'N')}}
            />
            {name}
            <a
                href='#'
                className={TaskStyles.Task_Remove}
                onClick={(e) => {
                    e.preventDefault();
                    deleteTask(no);
                }}
            ></a>
        </li>
    );
}

export default Task;