import React from 'react'
import { Link } from 'react-router-dom';

function Nav({nav_name}) {
  return (
    <div className={nav_name}>
        <ul>
            <li>
                <Link to='/' className='tab_list'>
                    <i className='fa-solid fa-user'></i>Friends
                </Link>
            </li>
            <li>
                <Link to='/chats' className='tab_list'>
                    <i className='fa-solid fa-comment'></i>Chats
                </Link>
            </li>
            <li>
                <Link to='/find' className='tab_list'>
                    <i className='fa-solid fa-magnifying-glass'></i>Find
                </Link>
            </li>
            <li>
                <Link to='/more' className='tab_list'>
                    <i className='fa-solid fa-ellipsis'></i>More
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav