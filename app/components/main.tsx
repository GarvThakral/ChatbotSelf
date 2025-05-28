"use client"
import Chatbox from "./chatbox"
import ChatName from "./chatname"
import InputBar from "./inputBar"
import Navbar from "./navbar"

export default function MainPage(){
    return (
        <div className = {"w-[80%] h-screen"}>
            <Navbar />
            <ChatName />
            <Chatbox />
            <InputBar />
        </div>
    )
}