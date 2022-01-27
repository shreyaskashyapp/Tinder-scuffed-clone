import React from "react"
import Profile from "./Profile"
import Chat from "./Chat"
import logo from "../assets/Tinder-Emblem.png"
import account_logo from "../assets/account-logo.png"
import chat_logo from "../assets/chat.png"
import settings_logo from "../assets/settings.png"
import Settings from "./Settings"



function Header(props) {






  return (
    <div className="header">
      <Profile
        src={account_logo}
        mode={props.mode} />

      <img className="img" src={logo} alt="" />


      <Chat
        src={chat_logo}
        mode={props.mode} />
      <Settings
        handleMode={props.toggle}
        src={settings_logo}
        mode={props.mode} />


    </div>
  )
}
export default Header
