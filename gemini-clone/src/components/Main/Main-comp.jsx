/* eslint-disable react/no-danger-with-children */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent the default form submission behavior
      onSent();
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''></img>
      </div>
      <div className="main-container">

        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Ibrahim.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt=''></img>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt=''></img>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt=''></img>
              </div>
              <div className="card">
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt=''></img>
              </div>
            </div>
          </>
        ):(
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt=''></img>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt=''></img>
              {
                loading
                ?
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                :
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        )
        }


        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder="Enter a prompt here"></input>
            <div>
              <img src={assets.gallery_icon} alt=''></img>
              <img src={assets.mic_icon} alt=''></img>
              <img onClick={() => onSent()} src={assets.send_icon} alt=''></img>
            </div>
          </div>
          <div className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
