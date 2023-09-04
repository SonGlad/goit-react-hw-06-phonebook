import PropTypes from 'prop-types';
import { ContactsStyle } from "./Contacts.styled";


export const Contacts = ({contacts, deleteContact}) => {
    return (
        <ContactsStyle>
            {contacts.map(({id, name, number}) => (
                <li className="list" key={id}>
                    <h3 className="list-name">{name}:</h3>
                    <p className="list-number">{number}</p>
                    <button className="btn btn-primary btn-block btn-large" 
                    type="button"
                    onClick={() => deleteContact(id)}>Delete</button>
                </li>
            ))}
        </ContactsStyle>
    )
};



Contacts.propTypes ={
    contatcs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};