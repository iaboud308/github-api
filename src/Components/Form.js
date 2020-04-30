import React, { Component } from 'react';


class Form extends Component {

    
    render () {

        return (
            <div>
                <form>
                    <input className = 'form-control container m-5' 
                        type = 'text' 
                        value = {this.props.username} 
                        onChange = {(event) => {
                            this.props.onHandle(event);
                        }}>
                    </input>
                </form>
            </div>
        )
    }
}

export default Form;