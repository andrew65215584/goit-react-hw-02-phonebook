import React from 'react';

function ContactList({ contactList }) {
  return (
    <ul>
      {contactList.map(el => {
        return (
          <li key={el.id}>
            <span>{el.name}</span>
            <span>: {el.number}</span>
            {/* <button onClick={handleButtonDelete(el.id)}>Delete</button> */}
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
