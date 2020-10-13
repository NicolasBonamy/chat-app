import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="Wallace Kim"/>
            <div>
                <p className="name">{props.name}</p>               
                    <div className="status">
                        <div className={props.online ? "status-online" : "status-offline"} />
                        <p className="status-text">{props.statustext}</p>
                    </div>                
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    statustext: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool,
  };

export default Contact;