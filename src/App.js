import './App.css';
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import s from 'app.module.css';
import Container from 'components/Container/container';
import { CSSTransition } from 'react-transition-group';
import logoTransition from 'logoTransition.module.css';
import Error from 'components/Error/error';
import contactsActions from 'redux/contacts-actions';
import { connect } from 'react-redux';



class App extends Component {
  state = {
  error: false,
  }

//   addContact = ({name, number}) => {
//     const contact = {
//         id: shortid.generate(),
//         name,
//         number: number,
//     };
//     this.setState(prevState =>{
//       if (this.state.contacts.find((contact) => contact.name === name)) {
//         this.setState({ error: true, })
//         return setTimeout(() => this.setState({ error: false, }), 500);
//       }
//       else{
//       return {
//           contacts: [...prevState.contacts, contact],}}
//   })
// };

// deleteContact = contactId =>{
//   this.setState(prevState =>({
//     contacts: prevState.contacts.filter(contact => contact.id!== contactId),
//   }))
// }

// changeFilter = filter => {
//   this.setState({filter});
// }
  
// getVisibleContacts = ()=>{
//   const {contacts, filter} = this.state;

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()), 
//     )
// }
  
  
  render() {
    const {error} = this.state;
    const visibleContacts = this.props;
    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={logoTransition}
        unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
          </CSSTransition>
     <ContactForm/>
    <Filter/> 
        <ContactList/>
         {error&&<Error/>} 
      </Container>
    );
  }
}

export default App;