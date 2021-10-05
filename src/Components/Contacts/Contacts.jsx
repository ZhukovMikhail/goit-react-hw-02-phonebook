import React from 'react';

const Contacts = ({ contItems, filteredValue }) => {
  if (filteredValue !== '') {
    const filteredArr = contItems.filter(contItem =>
      contItem.name.toLowerCase().includes(filteredValue.toLowerCase()),
    );
    return filteredArr.map(contItem => (
      <li>
        <span>{contItem.name}</span>
        <span>{contItem.number}</span>
      </li>
    ));
  } else {
    return (
      <ul>
        {contItems.map(contItem => (
          <li>
            <span>{contItem.name}</span>
            <span>{contItem.number}</span>
          </li>
        ))}
      </ul>
    );
  }
};

export default Contacts;
// filteredValue !== 0 &&
// filteredValue === contItem.name &&
