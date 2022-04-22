import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './routers/Friends';
import Chats from './routers/Chats';
import Chatting from './routers/Chatting';
import Find from './routers/Find';
import Profile from './routers/Profile';
import More from './routers/More';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Friends />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/chatting' element={<Chatting />} />
        <Route path='/find' element={<Find />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/more' element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
