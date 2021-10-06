import React from 'react';

const ContactForm = ({ onSubmit, hendleOnchange, stateName, stateValue }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={stateName}
          onChange={hendleOnchange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={stateValue}
          onChange={hendleOnchange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
