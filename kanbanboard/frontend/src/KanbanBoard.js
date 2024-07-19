import React from 'react';
import CardList from './CardList';
import data from './assets/json/data'
import {Kanban_Board} from './assets/scss/KanbanBoard.scss'

const KanbanBoard = () => {
    return (
        <div id="root">
            <div className={Kanban_Board}>
                 <CardList cards={data.filter(e => e.status === 'ToDo')} title={"To Do"} />
                <CardList cards={data.filter(e => e.status === 'Doing')} title={"Doing"} />
                <CardList cards={data.filter(e => e.status === 'Done')} title={"Done"} />
            </div>
        </div>
    );
};

export default KanbanBoard;