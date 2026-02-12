import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../styles/chatbot.css';

import * as portfolioData from '../portfolioData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Abhay's AI Assistant. How can I help you today?", type: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize API access
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, type: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    if (!apiKey || apiKey === "your_api_key_here") {
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          text: "I can't find your API key! Please check your .env file.",
          type: "bot"
        }]);
      }, 1000);
      return;
    }

    setIsTyping(true);

    try {
      const systemPrompt = `You are Abhay Tiwari's AI Assistant. 
      About: ${portfolioData.about}
      Skills: ${portfolioData.skills.map(s => s.name).join(', ')}
      Projects: ${portfolioData.projects.map(p => p.title).join(', ')}
      Email: ${portfolioData.contactInfo.email}.
      Be helpful, concise, and professional.`;

      const fullPrompt = `${systemPrompt}\n\nClient: ${userMessage.text}\nAssistant:`;

      // Use native fetch to bypass SDK blocks
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { text: botResponse, type: "bot" }]);
    } catch (error) {
      console.error("Gemini AI Final Error:", error);

      let friendlyError = "Sorry, I'm having trouble connecting to my AI brain.";
      if (error.message?.includes("fetch") || error.name === 'TypeError') {
        friendlyError += " (Network Error: The request was blocked. This often happens due to a VPN, firewall, or browser extension.)";
      } else {
        friendlyError += ` (Details: ${error.message.substring(0, 50)})`;
      }

      setMessages((prev) => [...prev, { text: friendlyError, type: "bot" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        className={`chatbot-toggle-v2 glass ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="chatbot-window-v2"
          >
            <div className="chatbot-header-v2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
                <h3 className="font-space font-bold text-sm tracking-wide uppercase whitespace-nowrap">AI Assistant</h3>
              </div>

              <div className="flex items-center gap-2 flex-grow justify-end mr-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            <div className="chatbot-messages-v2 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`msg-bubble ${msg.type === 'user' ? 'user-msg' : 'bot-msg'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bot-msg">
                    <div className="flex gap-1.5 py-1">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-area-v2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="chatbot-input-field-v2"
              />
              <button
                onClick={handleSend}
                className="chatbot-send-btn-v2"
                aria-label="Send Message"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;