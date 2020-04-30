import React, { Component } from 'react';


class Display extends Component {

    

    render () {

        return (
            <div>
                <p>{this.props.userInput}</p>
                <h4> {this.props.userProfile.login} </h4>
                <h4> {this.props.userProfile.name} </h4>
                <h4> {this.props.userProfile.company} </h4>
                <h4> {this.props.userProfile.url} </h4>
                <h4> {this.props.userProfile.public_repos} </h4>
            </div>
        )
    }
}

export default Display;