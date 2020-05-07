import React, { Component } from 'react';


class Display extends Component {

    render () {
        const { someError } = this.props;
        const { login, name, company, html_url, public_repos, avatar_url } = this.props.userProfile;

        if (someError) {
            return (
                <div className = 'container mt-3'>
                     <p>Sorry, Either This User Does Not Exist Or You've Ran Out Of Requests...</p>
                </div>
            )
        }
        if (login !== undefined) {
            return (
                <div className = 'container mt-3'>
                    <p>{this.props.userInput}</p>
                    <img src = {avatar_url} alt = 'Avatar' width = '150' height = '150' />
                    <h4> {login} </h4>
                    <h4> {name} </h4>
                    <h4> {company} </h4>
                    <h4> {public_repos} </h4>
                    <a href = {html_url} className = 'btn btn-secondary'>View Profile</a>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
        
    }
}

export default Display;