import './App.css';
import React, { Component } from 'react';
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/Contacts/Contacts.jsx';
import Filter from './Components/Filter/Filter.jsx';
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

    if (this.state.contacts.find(contact => contact.name === this.state.name)) {
      alert(this.state.name + ' is already in contacts');
      return;
    }
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
  deleteHandler = e => {
    console.dir(e.currentTarget.parentElement.id);
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.currentTarget.parentElement.id,
      ),
    });
  };
  render() {
    return (
      <>
        <div className="section">
          <h2>Phonebook</h2>
          <ContactForm
            onSubmit={this.onSubmitForm}
            hendleOnchange={this.hendleOnchange}
            stateName={this.state.name}
            stateValue={this.state.number}
          />
        </div>
        <h2>Contatts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilterChange={this.hendleOnchange}
        />
        <ContactList
          contItems={this.state.contacts}
          filteredValue={this.state.filter}
          deleteHandler={this.deleteHandler}
        />
      </>
    );
  }
}
export default App;
