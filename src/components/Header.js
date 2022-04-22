import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header({tab_name, left_btn, right_btn, friend_num, header_icon}) {
    if(tab_name === undefined) {tab_name = ''}
    if(left_btn === undefined) {left_btn = ''}
    if(right_btn === undefined) {right_btn = ''}
    if(friend_num === undefined) {friend_num = ''}
    if(header_icon === undefined) {header_icon = ''}
  return (
    <header className={tab_name}>
        <div className='status_bar'>
            <div className='left_item'><i className='fa-solid fa-plane'></i><i className='fa-solid fa-wifi'></i></div>
            <div className='center_item'><span>17</span>:<span>33</span></div>
            <div className='right_item'>
                <i className='fa-solid fa-moon'></i><i className='fa-brands fa-bluetooth-b'></i><span><span>100</span>%</span><i className='fa-solid fa-battery-full'></i>
            </div>
        </div>
        <div className='title_bar'>
            <h1>{tab_name}<i className={header_icon}></i><span>{friend_num}</span></h1>
            <div className='left_item'>
                <Link to={'/something'}>
                    {(left_btn.indexOf('fa')) ? (left_btn) : (<i className={left_btn}></i>)}
                </Link>
            </div>
            <div className='right_item'>
                <Link to={'/setting'}>
                    {(right_btn.indexOf('fa')) ? (right_btn) : (<i className={right_btn}></i>)}
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header