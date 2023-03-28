import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ contacts, handleDelete, children }) {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <span className={css.name}>{contact.name}: </span>
            {contact.number}
            <button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
};
