import React, {useState} from 'react';
import TaskStyle from './assets/scss/Task.scss'

function Task() {
    const [isCheck, setIsCheck] = useState(false);

    const checking = (e) => {

    };

    return (
        <li className='_Task'>
            <input type='checkbox' checked='true' />
            사용자 스토리 리스트업
            <a href='#' className='Task_Remove'></a>
        </li>
        // <form
        //     className={TaskStyle.Input_Add_Task}
        //     onSubmit={(e) => {
        //         e.preventDefault();
        //         addTask({
        //             checkBox: e.target.checkBox.value,
        //             content: e.target.content.value,
        //             deleteButton: e.target.deleteButton.value
        //         });
        //     }}>
        //     <input type='checkbox' name='checkBox' checked={checking} />
        // </form>
    );
}

export default Task;