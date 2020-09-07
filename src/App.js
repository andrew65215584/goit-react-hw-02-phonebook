import React, { Component } from 'react';
import style from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getName = data => {
    this.setState({ name: data });
  };

  getContact = contact => {
    let flag = true;

    this.state.contacts.map(el =>
      el.name === contact.name ? (flag = false) : '',
    );

    flag
      ? this.setState(prev => {
          return { ...prev, contacts: [...prev.contacts, contact] };
        })
      : alert(`is already in contacts`);
  };

  getFilterName = event => {
    this.setState({ filter: event.target.value });
  };

  filteredItems = () => {
    return this.state.filter
      ? this.state.contacts.filter(el =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        )
      : this.state.contacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <div className={style.form}>
          <ContactForm getContact={this.getContact} getName={this.getName} />
        </div>
        <h1>Contacts</h1>

        <Filter filter={this.state.filter} getFilterName={this.getFilterName} />

        <ContactList contactList={this.filteredItems()} />
      </div>
    );
  }
}

export default App;
