"use client"
import { useRef } from "react"
import axios from "axios";
import { useChatStore } from "../store/chatstore";
export default function InputBar(){
    const { currentMessage, setCurrentMessage } = useChatStore();
async function getResponse() {
    setCurrentMessage(""); // Clear previous message

    try {
      const response = await fetch("http://localhost:3000/api/geminiBackend", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder(); // To decode byte arrays to strings
      let receivedText = '';
      while (true) {
        const { done, value } = await reader!.read(); // 'done' is true when the stream is finished
        if (done) {
          break; // Exit the loop when the stream ends
        }

        // Decode the Uint8Array chunk to a string and append it
        receivedText += decoder.decode(value, { stream: true }); // { stream: true } handles multi-byte characters split across chunks
        setCurrentMessage(receivedText); // Update the state with the new partial message
      }

      console.log("Streaming complete. Final message:", receivedText);

    } catch (err) {
      console.error("Error fetching streamed response:", err);
    }
  }
    const inputRef = useRef(null);
    return (
        <div className = {"h-[15%] w-full flex items-center justify-center"}>
            <input ref = {inputRef} placeholder="Enter your input here" className = {'w-[70%]'}></input>
            <button onClick = {()=>getResponse()}>Send</button>
        </div>
    )
}