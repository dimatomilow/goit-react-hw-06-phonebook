import { useState} from 'react'
import shortid from 'shortid';
import { Form } from './Form.Styled'
import { useSelector, useDispatch } from 'react-redux';
import {saveContact} from '../../../Component/redux/contactsSlice '

 export function FormPhone() {
     const  [name, setName] = useState('');
     const [number, setNumber] = useState('');

     const dispatch = useDispatch();
     const items = useSelector(state => state.contacts.items);

     const handleChange = e => {
         const {name,value}=e.target
         switch (name) {
             case 'name':
                 setName(value);
                 break;
             case 'number':
                 setNumber(value);
                 break;

             default:
                 return;
         }

     };

   const handleSubmit = e => {
       e.preventDefault();

    const nameToAdd = items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase() && contact.number === number,
     );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
     }
     dispatch(saveContact({ id: shortid.generate(), name, number }));

     setName('')
     setNumber('')
     };


     return (
<Form onSubmit={handleSubmit}>
           <label htmlFor={shortid.generate()}>Name
               <input
              type="text"
              value={name}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
/>
                </label>
                <label htmlFor={shortid.generate()}>Number
                    <input type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
                </label>
           <button type='submit'>Add contact</button>
       </Form>
        );
    }




