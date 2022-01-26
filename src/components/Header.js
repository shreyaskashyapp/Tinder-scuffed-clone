import React from "react"
import Profile from "./Profile"
import Chat from "./Chat"
import logo from "../assets/Tinder-Emblem.png"
import account_logo from "../assets/account-logo.png"
import chat_logo from "../assets/chat.png"



function Header() {
  return (
    <div className="header">
      <Profile
        src={account_logo} />
      <img src={logo} alt="" />
      <Chat
        src={chat_logo} />


    </div>
  )
}
export default Header
