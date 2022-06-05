import { useState} from 'react'
import shortid from 'shortid';
import { FormPhone } from './Fopm/Form'
import { Filter } from './Filter/Filter'
import {Contacts} from './Contacts/Contacts'
export function AppPhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addForm = (name, number) => {
    const nameToAdd = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase() && contact.number === number,
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    setContacts( [contact, ...contacts])
  };

  const deleteContact = (contactId) => {
    setContacts( contacts.filter(contact => contact.id !== contactId) )
  };

  const filterChange = (e) => {
     setFilter(e.target.value)
   };

    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
        <>
        <FormPhone onSubmit={addForm} contacts={filterContact} />
        <Filter filterChange={filterChange} filter={filter}/>
        <Contacts contacts={filterContact} onDeleteContact={ deleteContact} />
        </>



    );

}

