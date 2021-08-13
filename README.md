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