import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ChatList.scss';

function ChatList({key, id, name, comment, img, hour, minute}) {
  return (
    <li>
      <Link to={'/chatting'}
            state={{id, name, img, hour, minute}}>
            <span className='chats_img' style={{backgroundImage : 'url('+img+')'}}></span>
            <span className='chats_cont'>
                <span className='chats_name'>{name}</span>
                <span className='chats_latest'>{comment}</span>
            </span>
            <span className='chats_time'><span>{hour}</span>:<span></span>{minute}</span>
      </Link>
    </li>
  )
}

ChatList.propTypes = {
  key : PropTypes.number.isRequired,
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  comment : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  hour : PropTypes.number.isRequired,
  minute : PropTypes.number.isRequired
};

export default ChatList