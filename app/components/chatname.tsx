import { TrashIcon } from "lucide-react";

export default function ChatName(){
    return (
        <div className = {"h-[10%] w-full flex items-center justify-between p-4"}>
            <div className = {"flex flex-col"}>
                <span>New Chat</span>
                <span>0 messages * Last updated 5:16:03 PM</span>
            </div>
            <div className = {"flex items-center"}>
                <button>Trash</button>
            </div>
        </div>
    )
} 