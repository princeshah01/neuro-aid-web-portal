import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { FileText, Search, Send, Upload, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import useBlurOnScroll from "@/hooks/useBlurOnScroll";
import { useChatbot } from "@/context/ChatbotProvider";

interface Message {
  id: string;
  role: "user" | "ai";
  content: any;
  timestamp: Date;
}

const ChatWithPdf = () => {
  const isBlurred = useBlurOnScroll();
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleChatbot } = useChatbot();
  const [sessionId, setSessionId] = useState("");
  // Auto-scroll to bottom when new messages arrive
  console.log(sessionId);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFileUpload = async (file: File) => {
    // Check if file is a PDF
    if (file.type !== "application/pdf") {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a PDF file",
        duration: 5000,
      });
      return;
    }

    setIsUploading(true);
    setUploadedFile(file);

    try {
      // Create FormData and append file
      const formData = new FormData();
      formData.append("file", file);

      // Make API call to upload and process PDF
      const response = await fetch(
        "http://localhost:5000/api/chat-pdf/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Upload failed");
      }

      // Save session ID
      const sessionId = data.session_id;
      setSessionId(sessionId); // Assuming you have setSessionId in your state

      setIsUploading(false);
      setIsProcessing(false);
      setIsFileUploaded(true);

      // Add initial message from AI
      const initialMessage: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: `I've analyzed your uploaded document "${file.name}". You can now ask questions about it.`,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);

      toast({
        title: "File processed successfully",
        description: "Your PDF has been uploaded and session started.",
        duration: 5000,
      });
    } catch (error) {
      setIsUploading(false);
      setIsProcessing(false);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error.message || "Something went wrong while uploading.",
        duration: 5000,
      });
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setIsFileUploaded(false);
    setMessages([]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    const trimmedMessage = message.trim();
    console.log(trimmedMessage);

    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmedMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      // Add a temporary AI "typing..." message
      const thinkingMessage: Message = {
        id: "thinking",
        role: "ai",
        content: "Thinking...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, thinkingMessage]);

      // Make the API call with the message
      const response = await fetch(
        `http://localhost:5000/api/chat-pdf/ask/${sessionId}`, // ensure sessionId is defined in your state
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: trimmedMessage }),
        }
      );

      const data = await response.json();

      // Remove "Thinking..." message
      setMessages((prev) => prev.filter((msg) => msg.id !== "thinking"));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to get AI response.");
      }

      // Add AI's response from API
      const aiMessage: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: data.answer,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      // Remove "Thinking..." message
      setMessages((prev) => prev.filter((msg) => msg.id !== "thinking"));

      // Show fallback AI error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: "Sorry, I couldn’t process your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);

      // Optionally show a toast
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Something went wrong while getting a response.",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Navbar scroll={isBlurred} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Chat with PDF
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Upload your medical reports and get AI-powered insights
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="healthcare-card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Upload Medical Report
              </h2>

              {!isFileUploaded ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    dragActive
                      ? "border-healthcare-blue bg-healthcare-soft-blue/50"
                      : "border-gray-300"
                  }`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                >
                  <div>
                    <div className="mx-auto w-16 h-16 bg-healthcare-soft-blue rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-healthcare-blue" />
                    </div>
                    <p className="text-lg text-gray-700">
                      Drag & drop your PDF report here, or
                    </p>
                    <div className="mt-4">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="bg-healthcare-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
                          Browse Files
                        </span>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="application/pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      Supports: PDF format only (max 10MB)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-healthcare-soft-blue/20 border border-healthcare-blue/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-healthcare-blue mr-3" />
                      <div>
                        <p className="font-medium">{uploadedFile?.name}</p>
                        <p className="text-sm text-gray-500">
                          {uploadedFile
                            ? `${(uploadedFile.size / (1024 * 1024)).toFixed(
                                2
                              )} MB`
                            : ""}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      aria-label="Remove file"
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="mt-2 mb-4">
                    <p className="text-sm text-gray-600">
                      You can now ask questions about this document
                    </p>
                  </div>
                </div>
              )}

              {isUploading && (
                <div className="mt-6 text-center">
                  <div className="animate-spin inline-block w-8 h-8 border-4 border-healthcare-blue border-opacity-50 border-t-healthcare-blue rounded-full mb-4"></div>
                  <p className="text-gray-600">Uploading your file...</p>
                </div>
              )}

              {isProcessing && (
                <div className="mt-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center space-x-3">
                      <div className="animate-pulse flex space-x-4 items-center">
                        <div className="w-10 h-10 bg-healthcare-blue/20 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-healthcare-blue/20 rounded w-3/4"></div>
                          <div className="h-4 bg-healthcare-blue/20 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 text-center">
                      Processing your document... analyzing content...
                    </p>
                  </div>
                </div>
              )}

              {/* Chat Interface */}
              {isFileUploaded && (
                <div className="mt-6">
                  <div className="bg-gray-50 rounded-lg border border-gray-200">
                    {/* Chat Messages */}
                    <div className="h-80 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-4 ${
                              msg.role === "user"
                                ? "bg-healthcare-blue text-white"
                                : "bg-white border border-gray-200 text-gray-800"
                            }`}
                          >
                            {msg.role === "user" ? (
                              <p>{msg.content}</p>
                            ) : (
                              <>
                                <p>{msg?.content?.message}</p>
                                <p>{msg?.content?.description}</p>
                                {msg?.content?.lists &&
                                  msg.content.lists.length > 0 && (
                                    <ul>
                                      {msg.content.lists.map((item, index) => (
                                        <li key={index}>{item}</li>
                                      ))}
                                    </ul>
                                  )}
                              </>
                            )}
                            <p className="text-xs opacity-70 mt-1">
                              {msg.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Message Input */}
                    <div className="border-t border-gray-200 p-4">
                      <form
                        onSubmit={handleSendMessage}
                        className="flex gap-2 items-center mt-4"
                      >
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Ask a question about your document..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-healthcare-blue text-white rounded-md hover:bg-blue-600"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Example questions:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <button
                        className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap"
                        onClick={() =>
                          setMessage(
                            "What are the main findings in this report?"
                          )
                        }
                      >
                        What are the main findings?
                      </button>
                      <button
                        className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap"
                        onClick={() =>
                          setMessage(
                            "Is there evidence of a tumor in this scan?"
                          )
                        }
                      >
                        Is there evidence of a tumor?
                      </button>
                      <button
                        className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap"
                        onClick={() =>
                          setMessage("Summarize this report in simple terms.")
                        }
                      >
                        Summarize in simple terms
                      </button>
                      <button
                        className="text-xs px-3 py-1.5 bg-healthcare-soft-blue text-healthcare-blue rounded-full whitespace-nowrap"
                        onClick={() =>
                          setMessage("When should I follow up next?")
                        }
                      >
                        When should I follow up?
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Extract Key Insights",
                  description:
                    "Our AI can extract key findings, diagnoses, and recommendations from complex medical reports.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-healthcare-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Simplified Explanations",
                  description:
                    "Get plain-language explanations of medical terminology and complex findings.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-healthcare-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Compare Reports",
                  description:
                    "Upload multiple reports to track changes and compare findings over time.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-healthcare-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="healthcare-card text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Privacy Note */}
            <div className="mt-12 bg-healthcare-soft-blue rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-healthcare-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Privacy & Security
                  </h3>
                  <p className="mt-2 text-gray-600">
                    All documents uploaded to our platform are encrypted and
                    processed securely. We do not store the contents of your
                    documents beyond your session, and all data is handled in
                    compliance with HIPAA regulations.
                  </p>
                  <p className="mt-2 text-gray-600">
                    Your privacy is our priority. Learn more about our security
                    measures in our
                    <a
                      href="#"
                      className="text-healthcare-blue hover:underline"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotWidget isOpen={isOpen} toggleChat={toggleChatbot} />
    </>
  );
};

export default ChatWithPdf;
