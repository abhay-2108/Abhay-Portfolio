import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaExternalLinkAlt, FaTrash, FaTerminal } from 'react-icons/fa';
import '../styles/chatbot.css';
import * as portfolioData from '../portfolioData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chat_history');
    return saved ? JSON.parse(saved) : [
      { 
        text: portfolioData.chatbotKnowledge?.greetings || "Greetings! I'm **Abhay's AI Agentic Assistant**. Ask me about his open-source work, PageFlow, Agent Foundry, or his background.", 
        type: "bot" 
      }
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = portfolioData.chatbotKnowledge?.quickPrompts || [
    "🌟 Open Source Contributions",
    "🚀 PageFlow Architecture",
    "🤖 Agent Foundry OS",
    "🔌 Model Context Protocol (MCP)",
    "💼 Background & Resume"
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
    const initialMsg = [{ 
      text: "Greetings! I'm **Abhay's AI Agentic Assistant**. How may I assist your exploration of his engineering work?", 
      type: "bot" 
    }];
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
        return <strong key={i} className="text-violet-300 font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <div className="flex flex-col gap-2">
        <div className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">{elements}</div>
        {msg.link && (
          <a
            href={msg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 w-fit transition-colors mt-1"
          >
            <FaExternalLinkAlt size={10} /> {msg.linkText || "View Repository"}
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

      const matches = (keywords) => keywords.some(kw => {
        const regex = new RegExp(`\\b${kw}s?\\b`, 'i');
        return regex.test(input);
      });

      // 1. Open Source Contributions
      if (matches(["open source", "opensource", "pr", "pull request", "docsgpt", "rea", "guardrails", "corsair", "contribution"])) {
        response.text = portfolioData.chatbotKnowledge?.responses?.openSource || 
          "Abhay has contributed core optimizations to **arc53/DocsGPT** (100x batched vector ingestion & recursive chunking), **morluto/rea** (APK decoding & Ghidra RISC-V PIE support), **guardrails-ai/guardrails** (@guard_tool governor), and **corsairdev/corsair**.";
        response.link = "#opensource";
        response.linkText = "Jump to Open Source Section";
      }
      // 2. PageFlow
      else if (matches(["pageflow", "notion", "local", "crdt", "ollama", "air-gapped", "electron"])) {
        response.text = portfolioData.chatbotKnowledge?.responses?.pageflow || 
          "**PageFlow** is a 100% private, local-first Notion workspace with on-device streaming AI via Ollama (DeepSeek-R1 / Llama 3.2), SQLite WAL mode, and Yjs CRDT local synchronization. Backed by 113 automated unit tests.";
        response.link = "https://github.com/abhay-2108/PageFlow";
        response.linkText = "Open PageFlow on GitHub";
      }
      // 3. Agent Foundry
      else if (matches(["agent foundry", "foundry", "personas", "dag", "swarm", "multi-agent"])) {
        response.text = portfolioData.chatbotKnowledge?.responses?.agentFoundry || 
          "**Agent Foundry** is a local-first autonomous multi-agent operating system featuring 10 specialist personas, 40 standardized modular skills, a 3-tier persistent SQLite WAL memory engine, and FastMCP tool servers.";
        response.link = "https://github.com/abhay-2108/agent-foundry";
        response.linkText = "Open Agent Foundry on GitHub";
      }
      // 4. Model Context Protocol (MCP)
      else if (matches(["mcp", "model context protocol", "fastmcp"])) {
        response.text = portfolioData.chatbotKnowledge?.responses?.mcp || 
          "Abhay is deeply active in the **Model Context Protocol (MCP)** ecosystem: contributed session component refresh to the official Python SDK, built the MCP Multi-Agent Air Quality reasoning system, and runs FastMCP servers locally.";
      }
      // 5. General Projects
      else if (matches(["project", "work", "build", "portfolio", "application", "software"])) {
        const topProjects = portfolioData.projects.slice(0, 3).map(p => `• **${p.title}**: ${p.subtitle}`).join("\n");
        response.text = `Abhay's flagship projects include:\n\n${topProjects}\n\nYou can explore and filter each project in the Projects section!`;
        response.link = "#projects";
        response.linkText = "Explore All Projects";
      }
      // 6. Certifications
      else if (matches(["cert", "certificate", "certification", "watsonx", "aws", "ibm", "google"])) {
        const certList = portfolioData.certifications.map(c => `• **${c.title}** (${c.organization})`).join("\n");
        response.text = `Abhay holds verified certifications including:\n\n${certList}`;
        response.link = "#certifications";
        response.linkText = "View Certifications";
      }
      // 7. Education & Background
      else if (matches(["education", "college", "vit", "university", "degree", "study", "cse", "background", "who"])) {
        response.text = portfolioData.chatbotKnowledge?.responses?.background || 
          "Abhay Tiwari is an AI Systems Engineer and B.Tech Computer Science student (Specialization in AI & ML) at **VIT Chennai**.";
      }
      // 8. Tech Stack
      else if (matches(["skill", "stack", "tech", "tool", "language", "python", "typescript"])) {
        response.text = "Abhay's stack spans:\n\n- **Autonomous Agents & LLMs:** Model Context Protocol (MCP), FastMCP, Multi-Agent DAGs, Ollama, LangGraph, RAG\n- **Deep Learning:** PyTorch, ONNX, Autoencoders, LSTMs\n- **Local-First Systems:** SQLite WAL, Yjs CRDTs, Vector Caching\n- **Core Engineering:** Python 3.11+, TypeScript, React 18, Vite, Electron, Docker";
        response.link = "#skills";
        response.linkText = "View Tech Taxonomy";
      }
      // 9. Resume
      else if (matches(["resume", "cv", "download"])) {
        response.text = "You can download Abhay's tailored resumes directly:\n\n• **AI/ML Resume:** Focused on agent swarms, MCP, and deep learning.\n• **Full-Stack Resume:** Focused on local-first runtimes, React, and systems engineering.";
        response.link = portfolioData.personalInfo.aiResume;
        response.linkText = "Download AI/ML Resume (PDF)";
      }
      // 10. Contact
      else if (matches(["contact", "email", "hire", "reach", "message", "linkedin", "github"])) {
        response.text = `You can reach Abhay directly at **${portfolioData.personalInfo.email}** or connect on LinkedIn at **${portfolioData.personalInfo.linkedin}**.`;
        response.link = portfolioData.personalInfo.linkedin;
        response.linkText = "Open LinkedIn Profile";
      }
      else {
        response.text = "I'm specialized in answering questions regarding Abhay's **Open Source Contributions**, **PageFlow**, **Agent Foundry**, **Model Context Protocol (MCP)**, or his **technical credentials**.";
      }

      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 500);
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
            className="chatbot-window-v2 glass"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400">
                  <FaTerminal size={12} />
                </span>
                <div>
                  <h4 className="font-space font-bold text-sm text-white">Portfolio AI Copilot</h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> FastMCP Knowledge
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearHistory}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Clear Chat History"
                >
                  <FaTrash size={12} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Close Assistant"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Suggestions */}
            <div className="p-2 bg-[#09090e] border-b border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-mono-code bg-white/[0.04] hover:bg-violet-600/20 text-slate-300 hover:text-violet-300 border border-white/[0.06] hover:border-violet-500/30 transition-all flex-shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="chatbot-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-bubble ${msg.type === 'bot' ? 'bot-bubble' : 'user-bubble'}`}
                >
                  {renderMessageContent(msg)}
                </div>
              ))}
              {isTyping && (
                <div className="message-bubble bot-bubble">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="chatbot-footer"
            >
              <input
                type="text"
                placeholder="Ask about Abhay's projects, PRs, stack..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="chatbot-input font-mono-code text-xs"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="chatbot-send-btn disabled:opacity-40"
                aria-label="Send query"
              >
                <FaPaperPlane size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;