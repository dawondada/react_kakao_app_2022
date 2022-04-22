import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Chatting.scss';


function Chatting() {
    const location = useLocation();
    const {id, name, img, hour, minute} = location.state;

  return (
    <>
        <header className='chatting_header'>
            <div className='status_bar'>
                <div className='left_item'><i className='fa-solid fa-plane'></i><i className='fa-solid fa-wifi'></i></div>
                <div className='center_item'><span>17</span>:<span>33</span></div>
                <div className='right_item'>
                    <i className='fa-solid fa-moon'></i><i className='fa-brands fa-bluetooth-b'></i><span><span>100</span>%</span><i className='fa-solid fa-battery-full'></i>
                </div>
            </div>
            <div className='title_bar'>
                <h1>{name}</h1>
                <div className='left_btn'>
                    <Link to={'/chats'}><i className="fa-solid fa-angle-left"></i></Link>
                </div>
                <div className='right_btn'>
                    <Link to={'/search'}><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to={'/menu'}><i className="fa-solid fa-bars"></i></Link>
                </div>
            </div>
        </header>
        <main className='chatting_main'>
            <span className='date_info'>Monday, April 18, 2022</span>
            <div className='chat_box my'>
                <span className="chat">Hello!</span>
                <span className="chat">Hello! This is a test message.</span>
                <span className="chat">This is a test message.</span>
                <span className="chat_time"><span>16</span>:<span>30</span></span>
            </div>
            <div className='chat_box other'>
              <div className="other_info">
                  <span className="profile_img" style={{backgroundImage : 'url('+img+')'}}></span>
                  <span className="profile_name">{name}</span>
              </div>
              <span className="chat">And this is an answer</span>
              <span className="chat">And this is an answer And this is an answer</span>
              <span className="chat">And this is an answer</span>
              <span className="chat_time"><span>{hour}</span>:<span>{minute}</span></span>             
            </div>
        </main>
        <footer>
            <span className='plus_btn'>
                <Link to={'/chatting_plus'}>
                    <i className="fa-solid fa-plus"></i>
                </Link>
            </span>
            <form action='/' method='post'>
                <fieldset className='text_box'>
                    <legend className='blind'>채팅입력창</legend>
                    <lable for='chatting' className='blind'>채팅입력</lable>
                    <input type='text' id='chatting' className='text_filed' />
                    <span className='emoticon_btn'>
                        <Link to={'/emoticon'}><i className="fa-regular fa-face-smile"></i></Link>
                    </span>
                    <span className='voice_btn'>
                        <Link to={'/voice'}><i className="fa-solid fa-microphone"></i></Link>
                    </span>
                </fieldset>
            </form>
        </footer>
    </>
  )
}

export default Chatting