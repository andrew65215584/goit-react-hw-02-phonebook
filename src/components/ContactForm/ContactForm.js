import React, { Component } from 'react';
import style from '../../App.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.props.getName(this.state.name);
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.props.getContact({ ...this.state, id: uuidv4() });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <h2>Name</h2>

        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <br />

        <label>
          Номер телефона:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type="submit" className={style.buttonSubmit}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
