import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Upload, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    content: "Hello! I'm NeuroScan Assistant. How can I help you today?",
    timestamp: new Date().toISOString(),
  },
];

interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
  timestamp: string;
}

interface ChatbotWidgetProps {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  isOpen,
  toggleChat,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newMessage }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: messages.length + 2,
        sender: "bot",
        content: data.response || "Sorry, I couldn't understand that.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);

      const errorMessage: Message = {
        id: messages.length + 2,
        sender: "bot",
        content: "Oops! Something went wrong. Please try again later.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileUpload = () => {
    const fileMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: "Uploaded: brain_scan.jpg",
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, fileMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const analysisMessage: Message = {
        id: messages.length + 2,
        sender: "bot",
        content:
          "Analyzing your scan... Based on my initial analysis, I don't detect signs of a malignant tumor. However, there is a small region of interest that should be reviewed by a specialist. I recommend scheduling a follow-up with your neurologist.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, analysisMessage]);
    }, 3000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen
            ? "bg-gray-600"
            : "bg-healthcare-blue hover:bg-healthcare-blue/90"
        }`}
        onClick={toggleChat}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] max-h-[500px] rounded-lg shadow-xl bg-white border border-gray-200 overflow-hidden transition-all transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-healthcare-blue p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">NeuroScan Assistant</h3>
                <p className="text-xs opacity-75">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 overflow-y-auto h-[300px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "bg-healthcare-blue text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick actions */}
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full flex items-center"
              onClick={() =>
                setNewMessage("How does tumor classification work?")
              }
            >
              <ChevronRight className="h-3 w-3 mr-1" />
              About classification
            </button>
            <button
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full flex items-center"
              onClick={() => setNewMessage("What file formats do you support?")}
            >
              <ChevronRight className="h-3 w-3 mr-1" />
              File formats
            </button>
            <button
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full flex items-center"
              onClick={handleFileUpload}
            >
              <ChevronRight className="h-3 w-3 mr-1" />
              Upload sample scan
            </button>
          </div>
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={handleFileUpload}
            >
              <Upload className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Type a message..."
                className="w-full py-2 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-healthcare-blue pr-10"
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-healthcare-blue text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
