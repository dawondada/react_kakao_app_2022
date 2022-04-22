import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Memberlist from '../data/Memberlist.json';
import ChatList from '../components/ChatList';
import '../styles/Chats.scss';
import { Link } from 'react-router-dom';

function Chats() {
  const chatlist = Memberlist;

  return (
    <>
      <Header tab_name = "Chats" left_btn = "Edit" header_icon = "fa-solid fa-caret-down"/>
      <main className='common'>
            <form className='search_box'>
                <fieldset className='search_inner'>
                    <legend className='blind'>검색창</legend>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <input type= 'search' name='search' id='search' placeholder='Find friends, chats, Plus Friends' />
                </fieldset>
            </form>
            <div className='main_section'>
                <header className='blind'><h2>Friends</h2></header>
                <ul className='chats_ul'>
                    {chatlist.map((friend, index) => {if(friend.id != 0){return(
                                        <ChatList
                                          key = {index}
                                          id = {friend.id}
                                          name = {friend.name}
                                          comment = {friend.profileMsg}
                                          img = {friend.profileImg}
                                          hour = {friend.hour}
                                          minute = {friend.minute}
                                        />
                    )}})}
                </ul>
            </div>
            <div className='chat_fa_btn'>
                <Link to={'/new_chat'}>
                  <i className="fa-solid fa-comment"></i>
                </Link>
            </div>
      </main>
      <Nav nav_name = 'chats_nav'/>
    </>
  )
}

export default Chats