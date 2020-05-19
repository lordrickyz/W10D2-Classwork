import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.handle = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
       clearInterval(this.handle);
    }

    render(){
        const {time} = this.state
        // debugger
        return (
            <>
            <h1 className="header">Clock</h1>
                <div className="content">
                    <div className="subcontent-time">
                    <span className="font"> Time: </span>
                    <span className="font"> {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</span>
                    </div>
                    <div className="subcontent-date">
                    <span className="font"> Date: </span>
                    <span className="font"> {time.toDateString()}</span>
                    </div>
                </div>
            </>
        );
    }
}