import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
import ResultContainer from './ResultContainer/ResultContainer';
import Cards from './Cards/Cards';

const name = require('@rstacruz/startup-name-generator');

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }
    // New method

    /* Old method
    constructor()
    {
        super();
        this.state={
          headText: 'Name It!',
        };
    }
    */

    handleInputChange = (inputText) => {
        // this.setState({headerExpanded: inputText.length>0 ?false : true });
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}
