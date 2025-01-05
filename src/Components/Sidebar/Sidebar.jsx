import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { onSent, prevPrompt, setrecentprompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt, image) => {
    setrecentprompt(prompt);
    await onSent(prompt, image);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setextended(() => !extended)}
          src={assets.menu_icon}
          alt=""
        />
        <br />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => loadPrompt(item.prompt, item.image)}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.prompt.slice(0, 18)}..</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help </p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity </p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Stting </p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
