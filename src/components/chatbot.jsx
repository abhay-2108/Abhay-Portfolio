import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaExternalLinkAlt, FaTrash } from 'react-icons/fa';
import '../styles/chatbot.css';

import * as portfolioData from '../portfolioData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chat_history');
    return saved ? JSON.parse(saved) : [
      { text: "Greetings! I'm **Abhay's AI Assistant**. It would be my pleasure to help you explore his professional background, projects, or certifications. How may I assist you today?", type: "bot" }
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastTopic, setLastTopic] = useState(null);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "🚀 Top Projects",
    "💻 Tech Stack",
    "🎓 Education",
    "🏆 Certifications",
    "📥 Download Resume"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
  }, [messages]);

  const clearHistory = () => {
    const initialMsg = [{ text: "Greetings! I'm **Abhay's AI Assistant**. How may I assist you further?", type: "bot" }];
    setMessages(initialMsg);
    localStorage.removeItem('chat_history');
  };

  const renderMessageContent = (msg) => {
    const text = msg.text;
    if (!text) return null;

    // Handle bolding: **text** -> <strong>text</strong>
    const parts = text.split(/(\*\*.*?\*\*)/g);
    const elements = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <div className="flex flex-col gap-2">
        <div className="whitespace-pre-line">{elements}</div>

        {/* Render Link Button if present */}
        {msg.link && (
          <a href={msg.link} target="_blank" rel="noopener noreferrer" className="rich-link-btn">
            <FaExternalLinkAlt size={12} /> {msg.linkText || "View Detail"}
          </a>
        )}
      </div>
    );
  };

  const handleSend = (text = null) => {
    const query = text || inputValue;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { text: query, type: "user" }]);
    if (!text) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const input = query.toLowerCase().trim();
      let response = { text: "", type: "bot" };

      // Improved matching helper with plural support
      const matches = (keywords) => keywords.some(kw => {
        const regex = new RegExp(`\\b${kw}s?\\b`, 'i');
        return regex.test(input);
      });

      // 1. Core Category Handling First (Highest Priority)
      if (matches(["project", "work", "build", "portfolio", "made", "application"])) {
        const webP = portfolioData.projects.filter(p => p.category === 'web').slice(0, 2).map(p => p.title).join(", ");
        const mlP = portfolioData.projects.filter(p => p.category === 'ml').slice(0, 2).map(p => p.title).join(", ");
        response.text = `Abhay has architected several high-impact projects. \n\n**AI/ML Highlights:** ${mlP}\n**Web Highlights:** ${webP}\n\nYou can scroll up to the Projects section to see the full details of each!`;
      }
      else if (matches(["certificate", "certification", "certified", "credential", "license"])) {
        const cert = [...portfolioData.certificates, ...portfolioData.certifications].find(c =>
          input.includes(c.title.toLowerCase()) ||
          (c.organization && input.includes(c.organization.toLowerCase()))
        );

        if (cert) {
          response.text = `Certainly! Abhay is professionally certified in **${cert.title}**, awarded by **${cert.organization || 'the respective organization'}**. \n\n${cert.description ? `**Overview:** ${cert.description}` : "This credential validates his advanced skills and commitment to professional excellence."}`;
          if (cert.link) {
            response.link = cert.link;
            response.linkText = "View Credential";
          }
        } else {
          const certList = [...portfolioData.certificates, ...portfolioData.certifications]
            .map(c => `• **${c.title}** (${c.organization})`)
            .join('\n');
          response.text = `Abhay has earned several prestigious certifications:\n\n${certList}\n\nWould you like to know more about any specific one?`;
        }
      }
      else if (matches(["education", "college", "vit", "university", "degree", "study", "cse"])) {
        response.text = `Abhay is a **Computer Science Engineering** student at **VIT Chennai**, specializing in AI & Machine Learning. He maintains a high GPA and a strong passion for research and practical implementation.`;
      }
      else if (matches(["skill", "tech", "stack", "tool", "know", "expert", "pro", "master"])) {
        const ai = portfolioData.aiSkills.slice(0, 5).map(s => s.name).join(", ");
        response.text = `Abhay possesses a robust technical stack!\n\n**AI/ML:** ${ai}\n**Full-Stack:** React, Node.js, Express, and modern styling tools.\n\nHe specializes in building intelligent agentic systems.`;
      }
      // 2. Specific Project Recognition
      else {
        const specificProject = portfolioData.projects.find(p =>
          input.includes(p.title.toLowerCase()) ||
          p.title.toLowerCase().split(' ').every(word => input.includes(word))
        );

        if (specificProject) {
          response.text = `Abhay developed **${specificProject.title}**, a ${specificProject.category === 'ml' ? 'AI/ML' : 'Web'} project. \n\n**Overview:** ${specificProject.description}`;
          response.link = specificProject.link;
          response.linkText = "View Codebase";
          setLastTopic(specificProject);
        }
        // 3. Question/FAQ Loop
        else {
          const allQuestions = [...portfolioData.generalQuestions, ...portfolioData.faq];
          const foundQuestion = allQuestions.find(q => {
            const qLower = q.question.toLowerCase();
            return qLower.includes(input) || input.includes(qLower.replace(/[?!]/g, "").trim());
          });

          if (foundQuestion) {
            response.text = foundQuestion.answer;
          }
          // 4. Other categories
          else if (matches(["hello", "hi", "hey", "greetings"])) {
            response.text = "Greetings! I am **Abhay's Assistant**. It's a pleasure to meet you. Please feel free to ask about his **projects**, **skills**, or **certifications**.";
          } else if (matches(["about", "who", "abhay", "him", "he", "background"])) {
            response.text = `**${portfolioData.about}** Currently, he is focused on advancing his research in AI and Deep Learning at VIT Chennai.`;
          } else if (matches(["resume", "cv", "download", "link"])) {
            response.text = "You may conveniently download Abhay's professional resumes from the **'About Me'** section of this portfolio.";
          } else if (matches(["contact", "email", "hire", "reach", "connect"])) {
            response.text = `You can reach Abhay directly at **${portfolioData.contactInfo.email}**. His social profiles are linked at the bottom of the page!`;
          } else if (matches(["tip", "advice", "learn", "start"])) {
            const randomTip = portfolioData.tips[Math.floor(Math.random() * portfolioData.tips.length)];
            response.text = `Abhay's professional advice is: "${randomTip}"`;
          } else if (matches(["thanks", "thank", "cool", "great", "nice", "awesome"])) {
            response.text = "You're very welcome! I'm here to help. Is there anything else you'd like to know about Abhay?";
          } else {
            response.text = "I apologize, but I'm not quite sure I understand. Could you please specify if you'd like to know more about Abhay's **projects**, **academic background**, or **certifications**?";
          }
        }
      }

      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 800);
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
              <div className="flex items-center gap-3">
                <button
                  onClick={clearHistory}
                  title="Clear Chat History"
                  className="text-white/40 hover:text-red-400 transition-colors"
                >
                  <FaTrash size={12} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            <div className="chatbot-messages-v2 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`msg-bubble ${msg.type === 'user' ? 'user-msg' : 'bot-msg'}`}>
                    {renderMessageContent(msg)}
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

            <div className="suggestion-chips-container scrollbar-hide">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  className="suggestion-chip"
                  onClick={() => handleSend(suggestion.replace(/[🚀💻🎓🏆📥]/g, "").trim())}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="chatbot-input-area-v2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can I assist you?"
                className="chatbot-input-field-v2"
              />
              <button onClick={() => handleSend()} className="chatbot-send-btn-v2" aria-label="Send Message">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;