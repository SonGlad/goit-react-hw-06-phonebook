import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactSlice";
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Notification } from "components/Notification/Notification";
import { NotificationFilter } from "components/NotificationFilter/NotificationFilter";



export const Contacts = () => {

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);


    const filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        );
    });
  

    const onDeleteContact = contactId  => {
        dispatch(deleteContact(contactId));
    };

    

    return (
        <>
            {contacts.length === 0 ? (
            <Notification message="There are no contacts in your list, sorry" />
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={filteredContacts}
                onDeleteContact={onDeleteContact}
            />
            ) : (
            <NotificationFilter notification="No contacts found that match the filter" />
            )}
        </>
    );
};
