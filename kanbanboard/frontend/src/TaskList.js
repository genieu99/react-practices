import React from 'react';
import Task from './Task'
import * as TaskStyles from './assets/scss/Task.scss';

function TaskList({tasks, addTask, updateTaskStatusDone, deleteTask}) {
    return (
        <div className={TaskStyles.Task_List}>
            <ul>
                {tasks?.map(
                    task => (
                        <Task
                            key={task.no}
                            no={task.no}
                            name={task.name}
                            done={task.done}
                            addTask={addTask}
                            updateTaskStatusDone={updateTaskStatusDone}
                            deleteTask={deleteTask}
                        />
                    ))}
            </ul>
            <input
                className={TaskStyles.Input_Add_Task}
                type='text'
                placeholder='태스크 추가'
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) {
                        return;
                    }

                    if (e.key === 'Enter') {
                        addTask(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
}

export default TaskList;