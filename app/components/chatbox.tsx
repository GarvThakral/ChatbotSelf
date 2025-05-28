"use client"
import { MessageSquareIcon, PersonStandingIcon } from "lucide-react";
import { useChatStore } from "../store/chatstore";

export interface AllMessageInterface{
    id:number;
    type:"Model"|"User";
    text:string;
}

export default function Chatbox(){
    const { currentMessage, setCurrentMessage } = useChatStore();
    const messages:AllMessageInterface[] = [{id:10,type:"Model",text:"Hello user"},{id:11,type:"User",text:"Hello model"}]
    return (
        <div className = {"h-[65%] w-full flex items-center justify-center"}>
            <div className = {"w-[80%] flex flex-col space-y-4"}>
                {/* <div className = {"self-end flex"}>
                    <span className = {"self-end"}>Hi there</span>
                    <PersonStandingIcon className = {"m-2"}/>
                </div>

                <div className = {"self-start flex"}>
                    <PersonStandingIcon className = {"m-2"}/>
                    <span className = {"self-end"}>Hi there</span>
                </div> */}
                {messages.map((item,index)=>{
                    return(
                        <div key = {index} className = {`${item.type == "Model" ? "self-start":"self-end"} flex`}>
                            {item.type == "Model" ? <PersonStandingIcon className = {"m-2"}/>:null}
                            {item.text}
                            {item.type == "User" ? <PersonStandingIcon className = {"m-2"}/>:null}
                        </div>
                    )
                })}
                {currentMessage!="" ? <div className = {"self-start"} >{currentMessage}</div> :null}
            </div>
        </div>  
    )
}