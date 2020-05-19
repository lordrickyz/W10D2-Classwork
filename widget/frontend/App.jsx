import React from "react";
import Clock from './clock';
import Tabs from './tab';


const Display = (props) => {
    const tabs = [
        { title: "one", content: "First content." },
        { title: "two", content: "Second content." },
        { title: "three", content: "Third content." }
    ];
    // debugger
    return (
        <>
            <Clock/>
            <Tabs tabs={tabs}/>
        </>
    );
}

export default Display;