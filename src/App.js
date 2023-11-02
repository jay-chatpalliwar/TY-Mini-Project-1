import './App.css';
import Menu from './components/menu'
import Forum from './components/forum'
import Dashboard  from './components/dashboard'
import Sideb from './components/Sideb'
import EmojiPicker from 'emoji-picker-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resource from "./pages/Resource";
import Profile from "./pages/Profile";

function App() {
  const user = "Jay Chatpalliwar";
  return (
    <div className="flex flex-row gap-1 overflow-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
    <Sideb/>
    <Routes>
    <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="doubtforum" element={<Forum user={user} />} />
          <Route path="dashboard" element={<Dashboard/>} />
           <Route path="/resources" element={<Resource></Resource>}></Route>
           <Route path="/profile" element={<Profile></Profile>}> </Route>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>

    </Routes>
    </div>
  );
}
export default App;
