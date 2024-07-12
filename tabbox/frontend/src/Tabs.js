import React from "react";
import TabItem from "./TabItem";
import {TabStyle} from "./assets/scss/Tabs.scss";

function Tabs({tabs}) {
    return (
        <ul className={TabStyle}>
            {tabs.map(t => <TabItem key={t.no} name={t.name} active={t.active} /> )}
        </ul>
    );
}

export default Tabs;