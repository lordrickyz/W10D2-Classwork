import React from 'react';

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {selectedTab: 0};
        this.selectContent = this.selectContent.bind(this);
    }

    render(){
        const tabs = this.props.tabs[this.state.selectedTab];
        const titles = [];
        const contents = []
        this.props.tabs.forEach((object)=>{
            for(let [key, value] of Object.entries(object)){
                if (key == "title") titles.push(value);
                if (key == "content") contents.push(value);
            }
        })
        
        const allTitles = titles.map((title, index)=>{
            return (
                <li onClick={this.selectContent} data-id={index} key={index}><h1>{title}</h1></li>
            );
        });

        return (
            <>
                <h1 className="tab-header">Tabs</h1>
                <div className="tabs-container">
                    <ul className="tabs">{allTitles}</ul>
                    <article> {contents[this.state.selectedTab]}</article>
                </div>
            </>
        );
    }

    selectContent(e) {
        const selectedTab = e.currentTarget.getAttribute("data-id");
        this.setState({selectedTab});
    }

}