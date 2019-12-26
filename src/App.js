import React from 'react';
import './App.css';
import ActionButton from './components/buttons/ActionButton'
import PhotoFrame from "./components/photo/PhotoFrame";

const like = `${process.env.PUBLIC_URL}/icons/like.png`;
const dislike = `${process.env.PUBLIC_URL}/icons/dislike.png`;

function App() {
  return (
    <div className="vk-tinder-main">
        <PhotoFrame user={{photo: null}}/>
        <div className='button-container'>
            <ActionButton imageLink={dislike} />
            <ActionButton imageLink={like} />
        </div>
    </div>
  );
}

export default App;
