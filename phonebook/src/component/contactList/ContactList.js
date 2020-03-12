import React from 'react'


import ContactListItem from './ContactListItem';
const ContactList = ({contact, deleteContact}) => {
    return (
        <ul>
            {
                contact.map(contact => (<ContactListItem contact={contact} key={contact.id} deleteContact={deleteContact}/>))
            }
        </ul>
    );
}

export default ContactList;