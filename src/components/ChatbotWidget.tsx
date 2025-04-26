
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Upload, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    content: 'Hello! I\'m NeuroScan Assistant. How can I help you today?',
    timestamp: new Date().toISOString()
  }
];

interface Message {
  id: number;
  sender: 'user' | 'bot';
  content: string;
  timestamp: string;
}

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Add user message
    const userMessageObj = {
      id: messages.length + 1,
      sender: 'user' as const,
      content: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, userMessageObj]);
    setNewMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Choose response based on message content
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse;
      const lowerCaseMessage = newMessage.toLowerCase();
      
      if (lowerCaseMessage.includes('tumor') || lowerCaseMessage.includes('scan') || lowerCaseMessage.includes('mri')) {
        botResponse = "I'd be happy to help analyze your brain scan. Please upload your MRI image, and I'll examine it for potential tumor indicators.";
      } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        botResponse = "Hello! I'm NeuroScan's AI assistant. I can help analyze brain MRIs or answer questions about our tumor classification system. How can I assist you today?";
      } else if (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('pdf')) {
        botResponse = "We offer two primary services: AI Tumor Classification from MRI scans and our Chat with PDF feature that lets you upload medical reports for AI analysis.";
      } else {
        botResponse = "Thank you for your message. For specific medical analysis, please upload an MRI scan or medical report, and I'll analyze it for you. Is there anything else you'd like to know about our services?";
      }
      
      const botMessageObj = {
        id: messages.length + 2,
        sender: 'bot' as const,
        content: botResponse,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessageObj]);
    }, 1500);
  };

  const handleFileUpload = () => {
    // Simulate file upload process
    const fileUploadMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      content: 'Uploaded: brain_scan.jpg',
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, fileUploadMessage]);
    
    // Simulate bot analysis
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const analysisMessage = {
        id: messages.length + 2,
        sender: 'bot' as const,
        content: 'Analyzing your scan... Based on my initial analysis, I don\'t detect signs of a malignant tumor. However, there is a small region of interest that should be reviewed by a specialist. I recommend scheduling a follow-up with your neurologist to discuss these findings.',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, analysisMessage]);
    }, 3000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isChatOpen ? 'bg-gray-600' : 'bg-healthcare-blue hover:bg-healthcare-blue/90'
        }`}
        onClick={toggleChat}
      >
        {isChatOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] max-h-[500px] rounded-lg shadow-xl bg-white border border-gray-200 overflow-hidden transition-all transform ${
          isChatOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
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

        {/* Chat messages */}
        <div className="p-4 overflow-y-auto h-[300px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-healthcare-blue text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap flex items-center"
              onClick={() => setNewMessage("How does tumor classification work?")}
            >
              <ChevronRight className="h-3 w-3 mr-1" />
              About classification
            </button>
            <button 
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap flex items-center"
              onClick={() => setNewMessage("What file formats do you support?")}
            >
              <ChevronRight className="h-3 w-3 mr-1" />
              File formats
            </button>
            <button 
              className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap flex items-center"
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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
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
