import React from 'react';
import Form from './Components/Form';
import Display from './Components/Display';
import Navbar from './Components/Navbar';

class App extends React.Component {

  state = {
    username: '',
    userProfile: '',
    someError: false
  }

  getUserInput(event) {
    let userInput = event.target.value;
    this.setState({username: userInput});
    this.fetchUser();
}
 
  fetchUser() {
    fetch(`https://api.github.com/users/${this.state.username}`, {
      headers: {
        'Authorization': `Token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    })
     .then( (response) => {
         console.log(response.status);
          if (response.status === 404) {
            this.setState({someError: true})
          }
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
      <React.Fragment>
        <Navbar />
      <div className = 'text-center'>
       <Form onHandle = {(event) => {
         this.getUserInput (event) 
        }}
          username = {this.state.username} />
        <Display userInput = {this.state.username} 
          userProfile = {this.state.userProfile} 
          someError = {this.state.someError} />
      </div>
      </React.Fragment>
     );
  }
  
}

export default App;
