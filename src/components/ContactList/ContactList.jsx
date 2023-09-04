import React from 'react';
import styles from './ContactList.module.css'
const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contactItem}> {/* Użyj zmiennej styles */}
    {name}: {number}
    <button className={styles.deleteButton} onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}> {/* Użyj zmiennej styles */}
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