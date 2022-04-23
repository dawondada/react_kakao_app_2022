import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Profile.scss';

function Profile() {
    const location = useLocation();
    const {id,name,email,img,bg} = location.state;
    console.log(location);

  return (
    <>
        <header className='profile_header'>
            <div className='status_bar'>
                <div className='left_item'><i className='fa-solid fa-plane'></i><i className='fa-solid fa-wifi'></i></div>
                <div className='center_item'><span>17</span>:<span>33</span></div>
                <div className='right_item'>
                    <i className='fa-solid fa-moon'></i><i className='fa-brands fa-bluetooth-b'></i><span><span>100</span>%</span><i className='fa-solid fa-battery-full'></i>
                </div>
            </div>
            <div className='title_bar'>
                <h1 className='blind'>Profile</h1>
                <div className='left_item'>
                    <Link to={'/'}>
                        <i className='fa-solid fa-xmark'></i>
                    </Link>
                </div>
                <div className='right_item'>
                    <Link to={'/user'}>
                        <i className='fa-solid fa-user'></i>
                    </Link>
                </div>
            </div>
        </header>
        <main className='profile_main'>
            <section className='background' style={{backgroundImage : 'url('+bg+')'}}><h2 className='blind'>My Profile background image</h2></section>
            <section className='profile'>
                <h2 className='blind'>My profile info</h2>
                <div className='profile_img' style={{backgroundImage : 'url('+img+')'}}></div>
                <div className='profile_cont'>
                    <span className='profile_name'>{name}</span>
                    <input type='mail' className='profile_email' placeholder={email} />
                    <ul className='profile_menu'>
                        <li>
                            <Link to={'/my_chatroom'}>
                                <span className='icon'><i className="fa-solid fa-comment"></i></span>My Chatroom
                            </Link>
                        </li>
                        <li>
                            <Link to={'/edit_profile'}>
                                <span className='icon'><i className="fa-solid fa-pencil"></i></span>Edit Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </>
  )
}

Profile.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    bg : PropTypes.string.isRequired
};

export default Profile