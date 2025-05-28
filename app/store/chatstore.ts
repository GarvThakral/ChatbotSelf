import { create } from 'zustand';
import { AllMessageInterface } from "../components/chatbox";

interface ChatStore {
  messages: AllMessageInterface[];
  currentMessage: string;
  setMessages: (messages: AllMessageInterface[]) => void;
  setCurrentMessage: (message: string) => void;
  addMessage: (message: AllMessageInterface) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  currentMessage: "",
  
  setMessages: (messages) => set({ messages }),
  
  setCurrentMessage: (message) => set({ currentMessage: message }),
  
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  
  clearMessages: () => set({ messages: [], currentMessage: "" }),
}));