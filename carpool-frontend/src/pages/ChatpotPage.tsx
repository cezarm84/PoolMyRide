import React from "react";
import ChatBot from "../components/ChatBot";

const ChatpotPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chatpot</h1>
      <ChatBot />
    </div>
  );
};

export default ChatpotPage;
