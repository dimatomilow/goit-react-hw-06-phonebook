import { useState} from 'react'
import shortid from 'shortid';
import { Form } from './Form.Styled'

 export function FormPhone({onSubmit}) {
     const  [name, setName] = useState('');
     const [ number, setNumber ] = useState('');

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
       onSubmit(name,
       number)
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




// class oldForm extends Component {
//    state = {
//        name: '',
//        number: ''
//   }
//   handleChange = e => {
//       this.setState({
//           name: e.target.value
//       })}
//     numberChange = e => {
//          this.setState({
//           number: e.target.value

//          })

//     }
//   handleSubmit = e => {
//       e.preventDefault();
//        this.props.onSubmit(this.state.name,
//        this.state.number)
//       this.setState({ name: '', number: '' })

//       };





//     render() {

//         return (
// <form onSubmit={this.handleSubmit}>
//            <label htmlFor={shortid.generate()}>Name
//                <input
//               type="text"
//               value={this.state.name}
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
// />
//                 </label>
//                 <label htmlFor={shortid.generate()}>Number
//                     <input
//   type="tel"
//                         name="number"
//                         value={this.state.number}
//                         onChange={this.numberChange}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//                 </label>
//            <button type='submit'>Add contact</button>
//        </form>
//         );
//     }
// }

