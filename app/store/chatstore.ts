import { create } from 'zustand';
import { AllMessageInterface } from "../components/chatbox";

interface ChatStore {
  chats: Record<string, AllMessageInterface[]>;
  currentChatId: string | null;

  setCurrentChat: (id: string) => void;

  addChat:    (id: string) => void;
  addMessage:(chatId: string, msg: AllMessageInterface) => void;
  clearChat: (chatId: string) => void;

  deleteChat: (id: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats:        {},
  currentChatId:null,

  setCurrentChat: (id) => set({ currentChatId: id }),

  addChat: (id) =>
    set((state) => ({
      chats: {
        ...state.chats,
        [id]: state.chats[id] ?? [],
      },
      currentChatId: id,
    })),

  addMessage: (chatId, msg) =>
    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [...(state.chats[chatId] || []), msg],
      },
    })),

  clearChat: (chatId) =>
    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [],
      },
    })),

  deleteChat: (id) =>
    set((state) => {
      const { [id]: _, ...rest } = state.chats;
      return { chats: rest, currentChatId: null };
    }),
}));
