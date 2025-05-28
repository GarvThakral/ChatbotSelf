"use client"
import { useChatStore } from "../store/chatstore";

export default function Sidebar() {
  const { chats, currentChatId, setCurrentChat, addChat } = useChatStore();

  return (
    <div className="w-[20%] h-screen flex flex-col">
      <div className="h-[15%] p-4 flex flex-col justify-center">
        <span>Conversations</span>
        <button onClick={() => {
          const newId = `chat-${Date.now()}`;
          addChat(newId);
        }}>
          New Chat
        </button>
      </div>

      <div className="h-[75%] p-4 overflow-y-auto">
        <span>Recent</span>
        <div className="mt-2 flex flex-col space-y-2">
          {Object.keys(chats).map((id) => (
            <button
              key={id}
              className={`text-left ${id === currentChatId ? 'font-bold' : ''}`}
              onClick={() => setCurrentChat(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[10%] flex items-center justify-center p-4">
        Powered by Google Gemini
      </div>
    </div>
  );
}
