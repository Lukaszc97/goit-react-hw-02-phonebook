import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [duplicateName, setDuplicateName] = useState(false); // Nowy stan dla sprawdzania duplikatów

  const handleNameChange = event => {
    setName(event.target.value);
    setDuplicateName(false); 
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    if (name.trim() !== '') {
      const isDuplicate = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      setDuplicateName(isDuplicate);
    }
  }, [name, contacts]);

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && number.trim() !== '' && !duplicateName) {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts([...contacts, newContact]);
      setName('');
      setNumber('');
    } else if (duplicateName) {
      alert('Contact with this name already exists!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
