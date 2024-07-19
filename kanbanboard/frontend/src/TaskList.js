import React from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/Task.scss';
import Task from './Task'

function TaskList({tasks}) {
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map(
                    task => <Task key={task.no} no={task.no} content={task.content} checked={task.checked}
                    />
                )}
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가' />
        </div>
    );
}

export default TaskList;