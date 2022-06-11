import { useSelector,useDispatch } from 'react-redux'
import { deleteContact } from '../../../Component/redux/contactsSlice '
import PropTypes from 'prop-types';
export const Contacts = () => {
    const dispatch = useDispatch()
     const items = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (

    <ul>
        {filteredContacts.map(({ id, name, number }) =>
        (<li key={id}>
            <p>{name}:<span>{number}</span></p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
        ))}
            </ul>
        );}




Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
}