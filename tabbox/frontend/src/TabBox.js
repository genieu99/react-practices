import React from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import "../src/assets/css/App.css"

function TabBox({tabs}) {
    return (
        <div className={'tab-box'}>
            <Tabs tabs={tabs}/>
            <TabView />
        </div>
    );
}

export default TabBox;