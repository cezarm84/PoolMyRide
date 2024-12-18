import React, { useState } from "react";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }, { sender: "Bot", text: "I’m here to help!" }]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="chat-box h-64 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 ${msg.sender === "Bot" ? "text-blue-600" : "text-black"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="border p-2 rounded-l-lg flex-grow"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
