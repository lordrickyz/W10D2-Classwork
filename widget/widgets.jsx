import React from 'react';
import ReactDOM from 'react-dom';
import Display from './frontend/App';
import Tabs from './frontend/tab';

document.addEventListener("DOMContentLoaded", (e)=>{
    const root = document.getElementById("root");
    // const hello = <h1>Hello from React!!!</h1>
    
    ReactDOM.render(<Display/>, root);
});