import React from 'react';
import './assets/scss/App.scss'
import KanbanBoard from "./KanbanBoard";

function App() {
    return (
        <div id={'App'} className={'App'}>
            <KanbanBoard />
        </div>
    );
}

export default App;