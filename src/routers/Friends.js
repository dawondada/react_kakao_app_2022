import React from 'react'
import Memberlist from '../data/Memberlist.json';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import Nav from '../components/Nav';
import '../styles/Friends.scss';

function Friends() {
    // const [profile, setProfile] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const friendlist = Memberlist;
    const myProfile = friendlist[0];
    console.log(friendlist)

    // useEffect(() => {
    //     const getUsers = async () => {
    //        try {
    //             setError(null);
    //             setProfile(null);
    //             setLoading(true);
    //             const users = await axios.get(
    //                 'https://jsonplaceholder.typicode.com/users'
    //             );
    //             setProfile(users.data);
    //        } catch(e) {
    //            setError(e);
    //        }
    //        setLoading(false);
    //     };
    //     getUsers();
    // }, []);

  return (
    <>
        <Header tab_name = 'Friends' friend_num = '1' left_btn = 'Manage' right_btn = 'fa-solid fa-gear' />
        <main className='common'>
            <form className='search_box'>
                <fieldset className='search_inner'>
                    <legend className='blind'>검색창</legend>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <input type= 'search' name='search' id='search' placeholder='Find friends, chats, Plus Friends' />
                </fieldset>
            </form>
            <section className='main_section'>
                <header><h2>My Profile</h2></header>
                <ul>
                    <MemberList
                        id = {myProfile.id}
                        name = {myProfile.name}
                        email = {myProfile.email}
                        comment = {myProfile.lastMsg}
                        img = {myProfile.profileImg}
                        bg = {myProfile.backgroundImg}
                    />
                </ul>
            </section>
            <section className='main_section'>
                <header><h2>Friends</h2></header>
                <ul>
                    {friendlist.map((friend, index) => {if(friend.id != 0){return(
                                         <MemberList
                                         key = {index}
                                         id = {friend.id}
                                         name = {friend.name}
                                         email = {friend.email}
                                         comment = {friend.lastMsg}
                                         img = {friend.profileImg}
                                         bg = {friend.backgroundImg}
                                     />   
                    )}})}
                </ul>
            </section>
        </main>
        <Nav nav_name = 'friends_nav' />
    </>
  )
}

export default Friends