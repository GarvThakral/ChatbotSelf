"use client"
import { MessageSquareIcon, PersonStandingIcon } from "lucide-react";
import { useChatStore } from "../store/chatstore";
import { useEffect, useRef } from "react";

export interface AllMessageInterface{
    id:number;
    type:"Model"|"User";
    text:string;
}

export default function Chatbox(){
    const { chats, currentChatId, addMessage } = useChatStore();
    const messages = currentChatId ? chats[currentChatId] : [];
    const currentRef = useRef(null);
    // useEffect(()=>{
    //     currentRef.current?.scrollIntoView()
    // },[messages])
    // const messages:AllMessageInterface[] = [{id:10,type:"Model",text:"Hello user"},{id:11,type:"User",text:"Hello model"}]
    return (
        <div className = {"h-[65%] w-full flex items-center justify-center"}>
            <div className = {"w-[100%] h-full flex flex-col space-y-4 overflow-y-scroll px-8"}>
                {messages.map((item,index)=>{
                    return(
                        <div key ={index} className={`px-4 py-2 flex rounded-2xl max-w-[60%] text-white ${item.type === "User" ? "bg-blue-500 self-end" : "bg-gray-600 self-start"}`}
                            >
                            {item.type == "Model" ? <PersonStandingIcon className = {" min-w-6 min-h-6"}/>:null}
                            {item.text} 
                            {item.type == "User" ? <PersonStandingIcon className = {" min-w-6 min-h-6"}/>:null}
                        </div>
                    )
                })}
            </div>
        </div>  
    )
}