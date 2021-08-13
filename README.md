### Create React App for calling an API to return pics of things a user searched for 

### Tools Used
- #### Semantic UI CDN
  - < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
  
### Notes
#### Things I learned
- #### Inline CSS styling is different in JSX
    - regular HTML - < div className="ui container" style="margin-top: 10px;">
    - **JSX** - < div className="ui container" **style={{marginTop: '10px'}}**>
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
- ##Different solutions:##
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