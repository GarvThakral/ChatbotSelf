import { MessageSquareIcon, MoonIcon, TextIcon } from "lucide-react";

export default function Navbar(){
    return (
        <div className = {"h-[10%] w-full flex justify-between p-4"}>
            <span className = {"flex items-center space-x-2"}>
                <MessageSquareIcon />
                <span>AI Chatbot</span>
            </span>
            <div className = {"flex items-center space-x-4"}>
                <span>
                    <button>chat</button>
                    <button>history</button>
                </span>
                <MoonIcon />
            </div>
        </div>
    )
}