

import { FormPhone } from './Fopm/Form'
import { Filter } from './Filter/Filter'
import { Contacts } from './Contacts/Contacts'
import BackLink from '../Movie/component/BackLink/BackLink';
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from '../../Component/redux/contactsSlice '
 function AppPhoneBook() {




  // const deleteContact = (contactId) => {
  //   setContacts( contacts.filter(contact => contact.id !== contactId) )
  // };



    // const normalizeFilter = filter.toLowerCase();
    // const filterContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
      <>
        <BackLink/>
        <FormPhone   />
        <Filter />
        <Contacts />
        </>



    );

}

export default AppPhoneBook