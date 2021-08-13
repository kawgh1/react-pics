import React from 'react'

class SearchBar extends React.Component {

    
    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
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