import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component {

    // callback function we're passing down to SearchBar as a prop to use as a callback from Child SearchBar
    onSearchSubmit(term) {
        
        // axios call
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID TxEHhTfNK3GkOTUMi0uK5u5mKrDKZv9KRQ-xydovOLk'
            }
         })
    }



    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;