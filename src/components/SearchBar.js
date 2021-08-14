import React from 'react'

class SearchBar extends React.Component {

    
    state = { term: '' };

    // disable an HTML form automatically submitting (and refreshing the page, re-rendering everything) when a user
    // hits 'enter' or 'return' in an text input field
    // onFormSubmit(event) { --- turned the function into an arrow function to fis the 'this' problem

    onFormSubmit = (event) => {
        event.preventDefault();

        // console.log(this.state.term)

        // callback function from Parent App.js that returns the value from onFormSubmit in SearchBar
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        {/* when we assign a function onInputChange to a a property or event handler, 
                        we dont use parenthesis on the end like onInputChange(), or it would call the function immediately upon every render */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})} />
                    </div>
                </form>
            </div>
        
        );
    }


}

export default SearchBar;