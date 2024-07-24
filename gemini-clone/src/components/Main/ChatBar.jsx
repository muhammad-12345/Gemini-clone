/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './ChatBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const ChatBar = () => {
    const { onSent, setInput, input } = useContext(Context);
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default form submission behavior
        onSent();
      }
    };
  
    return (
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src={assets.gallery_icon} alt='Gallery Icon' />
            <img src={assets.mic_icon} alt='Mic Icon' />
            <img onClick={() => onSent()} src={assets.send_icon} alt='Send Icon' />
          </div>
        </div>
        <div className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
        </div>
      </div>
    );
  };

export default ChatBar
