import React from 'react'
import PropTypes from 'prop-types';
const ContactListItem = ({contact:{id, name, number}, deleteContact}) => {
    return (
        <li>
            <span>{name}</span><br/>
            <span>{number}</span>
            <button type="button" id={id} onClick={deleteContact} >Delete</button>
        </li>
    );
}

ContactListItem.propTypes = {
    deleteContact:PropTypes.func,
    contact: PropTypes.shape({
        id:PropTypes.string,
        name:PropTypes.string,
        number:PropTypes.string  
    })
}


export default ContactListItem;