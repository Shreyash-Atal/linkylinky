import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: '',
            url: '',
            formErrors: {title: '', description: '', url: ''},
            nameValid: false,
            descriptionValid: false,
            formValid: false
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, description, url } = this.state;
        return (
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className = "form-control" value={title} onChange={this.handleChange} />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" className="form-control" value={description} onChange={this.handleChange} />

                <label htmlFor="url">Link / URL/ Web Address</label>
                <input type="text" name="url" className="form-control" value={url} onChange={this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;