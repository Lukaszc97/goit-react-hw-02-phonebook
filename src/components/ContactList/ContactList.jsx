import React from 'react';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li>
    {name}: {number}
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul style={{ width: '300px', margin: 'auto' }}>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        {...contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
