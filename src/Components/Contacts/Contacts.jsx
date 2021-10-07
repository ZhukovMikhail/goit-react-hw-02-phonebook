import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contItems, filteredValue, deleteHandler }) => {
  const filteredItems = contItems.filter(contItem =>
    contItem.name.toLowerCase().includes(filteredValue.toLowerCase()),
  );
  const renderItems = filteredValue !== '' ? filteredItems : contItems;

  return renderItems.map(renderItem => (
    <li className={styles.items} id={renderItem.id} key={renderItem.id}>
      <div className={styles.contItemsWrapper}>
        <span>{renderItem.name}</span>
        <span>{renderItem.number}</span>
      </div>
      <button className={styles.itemBtn} type="button" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  ));
};

export default ContactList;

ContactList.prototype = {
  contItems: PropTypes.array,
  filterValue: PropTypes.string,
  deleteHandler: PropTypes.func,
  filteredValue: PropTypes.array,
};
