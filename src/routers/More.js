import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav';
import PlusList from '../data/PlusList.json';
import Memberlist from '../data/Memberlist.json';
import Pluslist from '../components/Pluslist';
import '../styles/More.scss';


function More() {
  const pluslist = PlusList;
  const friendlist = Memberlist;
  const myProfile = friendlist[0];

  return (
    <>
        <Header tab_name="More" right_btn="fa-solid fa-gear" />
        <main className='common'>
            <section className='user_info'>
                <h2 className='blind'>사용자정보</h2>
                <span className='profile_img' style={{backgroundImage : 'url('+myProfile.profileImg+')'}}></span>
                <span className='profile_info'>
                    <span className='profile_name'>{myProfile.name}</span>
                    <span className='profile_email'>{myProfile.email}</span>
                </span>
                <span className='chat_img'><i className="fa-regular fa-comment"></i></span>
            </section>
            <section className='user_menu'>
                <h2 className='blind'>사용자 메뉴</h2>
                <ul>
                    <li>
                        <Link to={'/emoticons'}><i className="fa-regular fa-face-smile"></i>Emoticons</Link>
                    </li>
                    <li>
                        <Link to={'/themes'}><i className="fa-solid fa-paintbrush"></i>Themes</Link>
                    </li>
                    <li>
                        <Link to={'/plus_friends'}><i className="fa-regular fa-hand-peace"></i>Plus Friends</Link>
                    </li>
                    <li>
                        <Link to={'/account'}><i className="fa-regular fa-circle-user"></i>Account</Link>
                    </li>
                </ul>
            </section>
            <section className='plus_friends'>
                <header>
                    <h2>Plus Friends</h2>
                    <span><i className="fa-solid fa-circle-info"></i>Learn More</span>
                </header>
                <ul className='plus_list'>
                    {pluslist.map((list,index) => (
                      <Pluslist 
                            key={index}
                            id={list.id}
                            icon={list.icon}
                            text={list.text}
                      />
                    ) )}
                </ul>
            </section>
            <section className='more_app'>
              <h2 className='blind'>앱 더보기</h2>
              <ul>
                <li>
                  <Link to={'/kakao_story'}>
                      <span className='app_icon' /*style={{backgroundImage : 'url(/img/kakaostory.png)'}}*/></span>Kakao Story
                  </Link>
                </li>
                <li>
                  <Link to={'/kakao_path'}>
                      <span className='app_icon' /*style={{backgroundImage : 'url(/img/path.png)'}}*/></span>Path
                  </Link>
                </li>
                <li>
                  <Link to={'/kakao_friends'}>
                        <span className='app_icon' /*style={{backgroundImage : 'url(/img/kakaofriends.png)'}}*/></span>Kakao friends
                  </Link>
                </li>
              </ul>
            </section>
        </main>
        <Nav nav_name = 'more_nav' />
    </>
  )
}

export default More