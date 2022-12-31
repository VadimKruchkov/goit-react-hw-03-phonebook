import React from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/FilterContacts';
import ContactList from 'components/ContactList';
import initialContacts from './contact.json';

class Phonebook extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.checkDouble(newContact)
      ? alert(`${newContact.name} is already exist in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  deleteContact = delContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== delContactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  checkDouble = newContact => {
    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  getFilteredContacts = () => {
    let { contacts, filter } = this.state;
    const normaliziedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilter)
    );
  };

  render() {
    const filteredContactsList = this.getFilteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onInput={this.changeFilter} />
          {filteredContactsList.length > 0 && (
            <ContactList
              contacts={filteredContactsList}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Phonebook;
