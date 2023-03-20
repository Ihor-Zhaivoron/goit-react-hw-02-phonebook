import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: '10px',
        }}
      >
        <h1>Phonebook</h1>
        <input
          value={this.state.name}
          onChange={this.addContact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
        <h2>Contacts</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
