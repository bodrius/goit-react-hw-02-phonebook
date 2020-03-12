import React from "react";
import ContactForm from "./component/contactForm/ContactForm";
import ContactList from "./component/contactList/ContactList";
import Filter from "./component/filter/Filter";



class App extends React.Component {
  state = {
    contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
      ],
    filter: ""
  };

  handelSubmitForm = (e, data) => {
    e.preventDefault();
    this.setState(prevState=>({
        contacts:[...prevState.contacts,data]
    }))
  }

  deleteContact=(e)=>{
    const id=e.target.id;
    this.setState( prevState=>({
        contacts:prevState.contacts.filter(contact =>contact.id !== id)
    }))
  }

  checkName=(e)=>{
    this.setState({
        filter: e.target.value
    })
  }

  filterContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter))
  }

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm handelSubmitForm={this.handelSubmitForm} />
          <h2>Contacts</h2>
          <Filter checkName={this.checkName}/>
          <ContactList contact={this.filterContacts()} deleteContact={this.deleteContact}/>
          
        </div>
      </>
    );
  }
}

export default App;
