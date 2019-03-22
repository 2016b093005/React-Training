import React from 'react';
import PropTypes from 'prop-types';

const user = (props) => {
    return (
    <div>
        <p>{props.userName}</p>
        <p>{props.children}</p>
    </div>)
}

user.propTypes = {
    userName : PropTypes.string.isRequired 
}


export default user;
 