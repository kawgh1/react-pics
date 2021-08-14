import React from 'react'
// import axios from 'axios'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'


class App extends React.Component {

    state = {images: []};

    // callback function we're passing down to SearchBar as a prop to use as a callback from Child SearchBar
    onSearchSubmit = async (term) => { //had to make this an arrow function to avoid a 'this' problem 
        
        // asynchronous axios call
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            
            // callback
         });
        //  .then((response) => {
        //     console.log(response.data.results); // array of images returned
        //  })

        //console.log(response.data.results);
        this.setState({ images: response.data.results }); // 'this' problem
    }



    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images!
            </div>
        );
    }
}

export default App;