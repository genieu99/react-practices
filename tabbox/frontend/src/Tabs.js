import React, {useState} from "react";
import TabItem from "./TabItem";
import {TabStyle} from "./assets/scss/Tabs.scss";

function Tabs({tabs, selectTab}) {

    return (
        <ul className={TabStyle}>
            {tabs.map(t => <TabItem key={t.no} no={t.no} name={t.name} active={t.active} selectTab={selectTab}/> )}
        </ul>
    );
}

export default Tabs;