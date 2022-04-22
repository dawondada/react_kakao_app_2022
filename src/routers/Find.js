import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
  return (
    <>
        <Header tab_name= "Find" left_btn= "Edit" />
        <main className='common'>
            <ul className='find_method'>
                <li>
                    <Link to={'/find_number'}>
                        <i className="fa-solid fa-address-book"></i>Find
                    </Link>
                </li>
                <li>
                    <Link to={'/find_qr_code'}>
                        <i className="fa-solid fa-qrcode"></i>QR Code
                    </Link>
                </li>
                <li>
                    <Link to={'/find_shake'}>
                        <i className="fa-solid fa-mobile-screen-button"></i>Shake
                    </Link>
                </li>
                <li>
                    <Link to={'/find_via_sns'}>
                        <i className="fa-regular fa-envelope"></i>Invite via SNS
                    </Link>
                </li>
            </ul>
            <section className='recommend_section'>
                <header><h2>Recommend Friends</h2></header>
                <ul>
                  <li>You Have no recommend friends. </li>
                </ul>
            </section>
        </main>
        <Nav nav_name = 'find_nav' />
    </>
  )
}

export default Find