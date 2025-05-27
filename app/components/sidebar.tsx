export default function Sidebar(){
    return (
        <div className = {"w-[20%] h-screen"}>
            <div className = "w-full h-[15%] flex flex-col p-4 justify-center ">
                <span>Conversations</span>
                <button>New Chat</button>
            </div>
            <div className = "w-full h-[75%] flex flex-col p-4">
                <span>Recent</span>
                <span>Chat 1</span>
                <span>Chat 2</span>
            </div>
            <div className = "w-full h-[10%] flex flex-col items-center justify-center p-4">
                Powered by Google Gemini
            </div>
        </div>
    )
}