import { MessageSquareIcon, PersonStandingIcon } from "lucide-react";

export default function Chatbox(){
    
    return (
        <div className = {"h-[65%] w-full flex items-center justify-center"}>
            <div className = {"w-[80%] flex flex-col space-y-4"}>
                <div className = {"self-end flex"}>

                    <span className = {"self-end"}>Hi there</span>
                    <PersonStandingIcon className = {"m-2"}/>
                </div>
                <span className = {"self-start"}>Wassup Bruh</span>
            </div>
        </div>  
    )
}