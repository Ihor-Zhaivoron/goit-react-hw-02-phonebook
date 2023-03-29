import { Component } from 'react';
// import { nanoid } from 'nanoid';

//========== components ==========
import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

//========== styles ==========
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };
  addContact = (id, name, number) => {
    const findContact = this.state.contacts.name.find(
      contact => contact.name === name
    );
    if (findContact) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <ContactForm contacts={filteredContacts} handleDelete={this.onDelete}>
          <Filter onFilter={this.onFilter} />
        </ContactForm>
      </div>
    );
  }
}
