import React from "react";
import {Tab_Item, _active} from "./assets/scss/TabItem.scss";

function TabItem({name, active}) {
    return (
        <li className={`${active ? `${_active}` : ''} ${Tab_Item}`}>{name}</li>
    );
}

export default TabItem;