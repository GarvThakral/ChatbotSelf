"use client"
import { useRef } from "react"
import { useChatStore } from "../store/chatstore";

export default function InputBar() {
  const { currentChatId, addMessage } = useChatStore();
  const inputRef = useRef<HTMLInputElement>(null);

  async function getResponse() {
    const userText = inputRef.current?.value.trim();
    if (!userText || !currentChatId) return;

    addMessage(currentChatId, {
      id: Date.now(),
      type: "User",
      text: userText,
    });

    // clear the input box
    inputRef.current.value = "";

    // 2️⃣ Fetch the streamed response
    try {
      const res = await fetch("/api/geminiBackend", {
        method: "POST",
        body: JSON.stringify({ body: userText }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let receivedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        receivedText += decoder.decode(value, { stream: true });

        // optionally, you could show a “typing…” indicator here
      }

      // 3️⃣ Add the completed model response
      addMessage(currentChatId, {
        id: Date.now(),
        type: "Model",
        text: receivedText,
      });
    } catch (err) {
      console.error("Error fetching response:", err);
    }
  }

  return (
    <div className="h-[15%] w-full flex items-center justify-center">
      <input
        ref={inputRef}
        placeholder="Enter your input here"
        className="w-[70%] border px-2 py-1 rounded"
        onKeyDown={e => e.key === "Enter" && getResponse()}
      />
      <button onClick={getResponse} className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
}
