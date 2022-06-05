

export  const Contacts = ({ contacts,onDeleteContact })=>{return (

    <ul>
        {contacts.map(({ id, name, number }) =>
        (<li key={id}>
            <p>{name}:<span>{number}</span></p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
        ))}
            </ul>
        );}




