import React from 'react';

const ContactList = ({ contItems, filteredValue, deleteHandler }) => {
  const filteredItems = contItems.filter(contItem =>
    contItem.name.toLowerCase().includes(filteredValue.toLowerCase()),
  );
  const renderItems = filteredValue !== '' ? filteredItems : contItems;

  return renderItems.map(renderItem => (
    <ul>
      <li id={renderItem.id}>
        <span>{renderItem.name}</span>
        <span>{renderItem.number}</span>
        <button onClick={deleteHandler}>delete</button>
      </li>
    </ul>
  ));
};

export default ContactList;
