import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { ContactEl } from 'components/ContactEl/ContactEl';

export function ContactForm({ children }) {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={css.list}>
        <ContactEl />
      </ul>
    </div>
  );
}

ContactForm.propTypes = {
  children: PropTypes.node,
};
