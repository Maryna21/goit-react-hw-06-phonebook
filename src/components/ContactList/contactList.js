import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from 'components/ContactList/contactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import addTransition from 'components/ContactList/transitions/addTransition.module.css';
import Cross from 'svg/cross';
import contactsActions from 'redux/contacts-actions';
import { connect } from 'react-redux';


class ContactList extends Component {

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if(parsedContacts){
  //   this.props.initContacts(parsedContacts);}
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.contacts !== prevProps.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
  //   }
  // }
  render() {
    const { contacts, onDeleteContact } = this.props;
    console.log('props', this.props)

    return (
      <TransitionGroup component="ul" className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={addTransition} appear={true} unmountOnExit>
            <li className={s.item}>
              <div>{name}</div>
              <div className={s.number}>{number}</div>
              <button className={s.buttonDelete} type="button" onClick={() => onDeleteContact(id)}><Cross />
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    }),
  )
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact  =>
    contact.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
contacts: getVisibleContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
  // initContacts: contacts => dispatch(contactsActions.initContacts(contacts))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);




