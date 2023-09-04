import { useState, useEffect } from 'react';
import { initialContacts } from './utils/initialContacts';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Containers } from './Containers/Container';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Notification } from './Notification/Notification';
import { NotificationFilter } from './NotificationFilter/NotificationFilter';



export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    return storedContacts || initialContacts;
  });
  

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  

  const onFormSubmitData = ({ name, number }) => {
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      alert(`${name} or entered ${number} number is already in contacts.`);
      return;
    }
  

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
  
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };


  const [filter, setFilter] = useState('');


  const filterByString = (field, filterValue) => {
    return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim());
  };


  const filteredContacts = () => {
    return contacts.filter(
      (contact) =>
        filterByString(contact.name, filter) ||
        filterByString(contact.number, filter)
    );
  };
  

  const onFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };


  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  

  const onLengthCheck = () => {
    return contacts.length;
  };

  
  const renderOnContactsChange = () =>{
    if(onLengthCheck() === 0){
      return <Notification message="There are no contatcs in your list, sorry"/>
    } else{
      if(filteredContacts().length > 0){
        return <Contacts 
          contacts={filteredContacts()} 
          deleteContact={deleteContact}/>
      } else{
        return <NotificationFilter notification="No contacts found that match the filter"/>
      }
    }
  }



  return(
    <Section>
        <Containers title={'Phonebook'}>
          <Form onChange={onFormSubmitData}/>
        </Containers>
        <Containers title={'Filter'}>
          <Filter
            filter={filter}
            onFilterChange={onFilterChange}
            />
        </Containers>
        <Containers title={'Contacts'}>
          {renderOnContactsChange()}
        </Containers>
      </Section>
  )
}; 
