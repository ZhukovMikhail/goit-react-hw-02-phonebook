import './App.css';
import React, { Component } from 'react';
import Contacts from './Components/Contacts/Contacts.jsx';
// import Filter from './Components/Filter/Filter.jsx';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  hendleOnchange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    //не работает метод push()!!!!!!!!! не понял почему!!!!!!!!!!!!!! 1 час в пустую!
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, id: uuidv4(), number: this.state.number },
      ],
    }));
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div className="section">
        <form onSubmit={this.onSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleOnchange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.hendleOnchange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contatts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.hendleOnchange}
          />
        </label>

        <Contacts
          contItems={this.state.contacts}
          filteredValue={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
