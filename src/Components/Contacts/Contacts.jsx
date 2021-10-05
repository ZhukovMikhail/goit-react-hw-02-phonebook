import React from 'react';

const Contacts = ({ contItems, filteredValue, deleteHandler }) => {
  if (filteredValue !== '') {
    const filteredArr = contItems.filter(contItem =>
      contItem.name.toLowerCase().includes(filteredValue.toLowerCase()),
    );

    return filteredArr.map(contItem => (
      <li id={contItem.id}>
        <span>{contItem.name}</span>
        <span>{contItem.number}</span>
        <button onClick={deleteHandler}>delete</button>
      </li>
    ));
  } else {
    return (
      <ul>
        {contItems.map(contItem => (
          <li id={contItem.id}>
            <span>{contItem.name}</span>
            <span>{contItem.number}</span>
            <button onClick={deleteHandler}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Contacts;
// filteredValue !== 0 &&
// filteredValue === contItem.name &&
