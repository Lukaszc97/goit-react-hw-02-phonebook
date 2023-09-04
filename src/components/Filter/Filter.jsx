import React from 'react';
import styles from './Filter.module.css'

const Filter = ({ value, onChange }) => (
  <input className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search contacts by name"
  />
);

export default Filter;
