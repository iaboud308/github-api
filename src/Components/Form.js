import React, { Component } from 'react';


class Form extends Component {

    
    render () {

        return (
            <div className = 'bg-info'>
                <form>
                    <label className = 'text-white font-weight-bold form-group m-5 container'> Enter Username:
                        <input className = 'form-control p-4 m-2' 
                            type = 'text' 
                            value = {this.props.username} 
                            onChange = {(event) => {
                                this.props.onHandle(event);
                            }}>
                        </input>
                    </label>
                </form>
            </div>
        )
    }
}

export default Form;