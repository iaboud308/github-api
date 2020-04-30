import React from 'react';
import Form from './Components/Form';
import Display from './Components/Display';

class App extends React.Component {

  state = {
    username: '',
    userProfile: ''
  }

  getUserInput(event) {
    let userInput = event.target.value;
    this.setState({username: userInput});
    this.fetchUser();
}

  fetchUser() {
    fetch(`https://api.github.com/users/${this.state.username}`)
     .then( (response) => {
         return response.json();
     })
      .then( (userProfile) => {
          this.setState({userProfile: userProfile})
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  render () {
    return (
      <div className = 'container text-center'>
       <Form onHandle = {(event) => {
         this.getUserInput (event) 
        }}
          username = {this.state.username} />
        <Display userInput = {this.state.username} 
          userProfile = {this.state.userProfile} />
      </div>
     );
  }
  
}

export default App;
