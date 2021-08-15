### Create React App for calling an API to return pics of things a user searched for 

### Tools Used
- #### Semantic UI CDN
  - < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

- #### Unsplash API
    - https://api.unsplash.com/
    - Documentation - https://unsplash.com/documentation
    - Authorization (private key) required to access
        - https://unsplash.com/documentation#public-authentication
        - Have to sign up for free account to access API
- #### Axios
    - 3rd party package for handling API requests, beefed up version of fetch()
    - **npm install --save axios**
    - Example GET call to API with Unsplash authorization header and query param
        
        Ex)

            state = {images: []};

            onSearchSubmit = async (term) =>

                // axios call
                axios.get('https://api.unsplash.com/search/photos', {
                    params: { query: term},
                    headers: {
                        Authorization: 'Client-ID jFsdf0As0910912HJ0hf0-9jhasd@lk'
                    }
                })

                this.setState({ images: response.data.results });
                
            }

![App Component Diagram](https://github.com/kawgh1/react-pics/blob/main/app-comp-heir.png)

  
### Notes
#### Things I learned
- #### Inline CSS styling is different in JSX
    - regular HTML - < div className="ui container" style="margin-top: 10px;">
    - **JSX** - < div className="ui container" **style={{marginTop: '10px'}}**>

- #### All elements displayed as part of a List object should have key values
    - This actually makes React more performant and less error prone

- #### Dynamic image display using React
    - 1. Let the ImageCard render itself and its image
    - 2. Reach into the DOM and figure out the height of the image
    - 3. Set the image height on State to get the component to re-render
    - 4. When re-rendering, assign a 'grid-row-end' CSS Grid property to the image to make sure the image takes up the appropriate amount of space
        - This creates the **"Brick and Mortar"** image gallery effect, dynamically regardless of what images are displayed
    - #### React Refs
        - Gives access to a single DOM element
        - We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props
            - We call a function inside the constructor to create a reference and assign it as an instance variable on the Class
                - These refs are not going to change over time and we're never going to call setState on them
                - In general, we only put data in State if we expect it to change over time
            - **Once we assign that ref as an instance variable on our Class, we're then going to go down to a render method and pass that ref into some particular JSX element as a prop**

        Ex)

            class ImageCard extends React.Component {

                constructor(props) {
                    super(props);

                    this.imageRef = React.createRef();
                }

                render() {
                    return (
                        <div>
                            <img ref={this.imageRef} alt={this.props.image.description}
                                src={this.props.image.urls.regular}
                            />
                        </div>
                    );
                }
            }

            
- #### Controlled vs. Uncontrolled elements
    - like an input field
        - React can answer --> what is the state of the input field ***right now***? HTML can't 
        - Ex) - A customer validator that says password must be at least 4 characters that goes away as soon as 
                4 characters are entered - because the component re-renders with each new character and State is updated each time

                render() {
                    return (
                        < div className="ui segment">
                            <form className="ui form">
                                <div className="field">
                                    <label>Enter Password</label>
                                    <input 
                                        type="password" value={this.state.password} 
                                        onChange={(e) => this.setState({ password: e.target.value})}
                                    />
                                </div>
                                {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                            </form>
                        </div>

- #### Disabling an HTML Form object's onSubmit() method of text/input fields is standard
    - To prevent auto-refreshing the page and thus re-rendering all the components when a user hits 'enter' or 'return'
    - Ex)

            onFormSubmit(event) {
                event.preventDefault();
            }

            ...

            <form onSubmit={this.onFormSubmit} className="ui form">
                <input .... >
            </form>


- # The 'this' problem in Javascript
- ## Different solutions:##
    - **binding the method within a constructor**

        class Car {
                constructor() {
                    this.drive = this.drive.bind(this);
                }

                setDriveSound(sound) {
                    this.sound = sound;
                }

                drive() {
                    return this.sound;
                }
                }

            const car = new Car();
            car.setDriveSound('vroom');

            const drive = car.drive;

    
    - **Turn the function into an arrow function () => {...}**
        - anytime you have a function in Javascript its going to break the 'this'
        - **onFormSubmit(event) {...}** is really **onFormSubmit: function(event){...}**
            - **One for the sweet things about ES2015 is 'this' is automatically binded in arrow functions () => {...}
            - So, in another way to fix the 'this' problem of a function is to turn it into an arrow function
                - **onFormSubmit = (event) => {...}**


- ## Communicating Child to Parent (up the chain)
    - Normally in React, **props can only be passed down from Parent to Child Components**
        - However, you can define a **callback method** in the **Parent Component** and pass that method down to the **Child** as a **prop**
            - The Child will then call that callback method like normal and it will 'callback' up the chain to the Parent
                - **ie, returning a value from a method called by a Child to its Parent Component**