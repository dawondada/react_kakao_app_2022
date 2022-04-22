import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Pluslist({key,id,icon,text}) {
  return (
    <li>
        <Link to={'/plus_list'}>
            <i className={icon}></i>
            <span className='plus_text'>{text}</span>
        </Link>
    </li>
  )
}

Pluslist.propTypes = {
    key : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired 
};

export default Pluslist