

import { FormPhone } from './Fopm/Form'
import { Filter } from './Filter/Filter'
import { Contacts } from './Contacts/Contacts'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from '../../Component/redux/contactsSlice '
export function AppPhoneBook() {




  // const deleteContact = (contactId) => {
  //   setContacts( contacts.filter(contact => contact.id !== contactId) )
  // };



    // const normalizeFilter = filter.toLowerCase();
    // const filterContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
        <>
        <FormPhone   />
        <Filter />
        <Contacts />
        </>



    );

}

