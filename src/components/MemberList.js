import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/MemberList.scss';

function MemberList({key, id, name, email, comment, img, bg}) {
  return (
    <li>
      <Link to={'/profile'}
            state={{id, name, email, img, bg}}>
          <span className='profile_img' style={{backgroundImage : 'url('+img+')'}}></span>
          <span className='profile_name'>{name}</span>
          <span className='profile_messages'>{comment}</span>
      </Link>
    </li>
  )
}

MemberList.propTypes = {
    key : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    comment : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    bg : PropTypes.string.isRequired
  };

export default MemberList