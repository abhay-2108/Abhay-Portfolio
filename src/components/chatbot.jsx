import React, { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css';
import { FaRobot, FaUserCircle, FaPaperPlane } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import {
  about,
  resumeLink,
  calendarLink,
  projects,
  skills,
  certifications,
  contactInfo,
  tips,
  faq,
  quiz,
  blogPosts
} from '../portfolioData';

function getCategoryProjects(category) {
  const filtered = projects.filter(p => p.category === category);
  if (filtered.length === 0) return "No projects found in this category.";
  return (
    <div>
      <b>{category === 'web' ? 'Web Development Projects' : 'AI/ML Projects'}:</b>
      <ul style={{paddingLeft: 18}}>
        {filtered.map((p) => (
          <li key={p.title} style={{marginBottom: 10}}>
            <b>{p.title}</b>: {p.description}
            <br/>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View Project ↗</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getCategoryProjectList(category) {
  const filtered = projects.filter(p => p.category === category);
  if (filtered.length === 0) return <span>No projects found in this category.</span>;
  return (
    <span>
      <b>{category === 'web' ? 'Web Projects' : 'AI/ML Projects'}:</b>
      <ul style={{paddingLeft: 18}}>
        {filtered.map((p) => (
          <li key={p.title}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
          </li>
        ))}
      </ul>
    </span>
  );
}

function getProjectAnswer(input) {
  const lower = input.toLowerCase();
  const found = projects.find(p => lower.includes(p.title.toLowerCase().split(' ')[0]) || lower.includes(p.title.toLowerCase()));
  if (found) {
    return (
      <span>
        <b>{found.title}</b>: {found.description}<br/>
        <i>Tech:</i> {found.details}<br/>
        <a href={found.link} target="_blank" rel="noopener noreferrer">View Project ↗</a>
      </span>
    );
  }
  return null;
}

function getSkillsList() {
  // Group skills by category
  const grouped = {};
  skills.forEach(skill => {
    if (!grouped[skill.category]) grouped[skill.category] = [];
    grouped[skill.category].push(skill);
  });
  return (
    <span>
      <b>Technical Skills:</b>
      <ul style={{paddingLeft: 18}}>
        {Object.entries(grouped).map(([category, skillList]) => (
          <li key={category}>
            <b>{category}:</b> {skillList.map(s => `${s.name} (${s.level}%)`).join(', ')}
          </li>
        ))}
      </ul>
    </span>
  );
}

function getCertificationsList() {
  return (
    <span>
      <b>Certifications:</b> <ul style={{paddingLeft: 18}}>{certifications.map((c, i) => <li key={i}>{c}</li>)}</ul>
    </span>
  );
}

function getContactLinks() {
  return (
    <span>
      <b>Contact Abhay:</b><br/>
      Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><br/>
      LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">Profile</a><br/>
      GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">Profile</a>
    </span>
  );
}

function getTips() {
  return (
    <span>
      <b>Tips for AI/ML Beginners:</b>
      <ul style={{paddingLeft: 18}}>{tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
    </span>
  );
}

function getFAQ(input) {
  const lower = input.toLowerCase();
  const match = faq.find(f => lower.includes(f.question.toLowerCase()));
  if (match) return <span><b>Q:</b> {match.question}<br/><b>A:</b> {match.answer}</span>;
  return null;
}

function getBlogPosts() {
  if (!blogPosts.length) return "No recent blog posts.";
  return (
    <span>
      <b>Recent Blog Posts:</b>
      <ul style={{paddingLeft: 18}}>
        {blogPosts.map((b, i) => (
          <li key={i}>
            <a href={b.link} target="_blank" rel="noopener noreferrer">{b.title}</a> ({b.date})<br/>{b.summary}
          </li>
        ))}
      </ul>
    </span>
  );
}

let quizIndex = 0;
function getQuizQuestion() {
  if (!quiz.length) return "No quiz questions available.";
  const q = quiz[quizIndex % quiz.length];
  quizIndex++;
  return (
    <span>
      <b>Quiz:</b> {q.question}<br/>
      {q.options.map((opt, i) => (
        <span key={i}>{String.fromCharCode(65 + i)}) {opt} <br/></span>
      ))}
    </span>
  );
}

function getProjectList() {
  return (
    <span>
      <b>Project List:</b>
      <ul style={{paddingLeft: 18}}>
        {projects.map((p) => (
          <li key={p.title}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
          </li>
        ))}
      </ul>
    </span>
  );
}

function getBotResponse(input) {
  const lower = input.toLowerCase();

  // List of projects (names and links only)
  if (/list (all )?(projects|project)|show (all )?(projects|project)|project list/.test(lower)) {
    return getProjectList();
  }
  // List of web projects (names and links only)
  if (/list (all )?(web|frontend|web development) projects?/.test(lower)) {
    return getCategoryProjectList('web');
  }
  // List of AI/ML projects (names and links only)
  if (/list (all )?(ml|ai|machine learning|data science) projects?/.test(lower)) {
    return getCategoryProjectList('ml');
  }
  // About
  if (/about( me)?|yourself|who are you/.test(lower)) {
    return about;
  }
  // Skills
  if (/skill|technolog|stack/.test(lower)) {
    return getSkillsList();
  }
  // Certifications
  if (/certificat|badge/.test(lower)) {
    return getCertificationsList();
  }
  // Resume
  if (/resume|cv/.test(lower)) {
    return <span>You can view or download Abhay's resume here: <a href={resumeLink} target="_blank" rel="noopener noreferrer">Resume PDF</a></span>;
  }
  // Calendar/Meeting
  if (/calendar|meet|schedule/.test(lower)) {
    return <span>You can schedule a meeting here: <a href={calendarLink} target="_blank" rel="noopener noreferrer">Calendly</a></span>;
  }
  // Contact
  if (/email|contact|linkedin|github|send.*email|send.*message|write.*email/.test(lower)) {
    return getContactLinks();
  }
  // Navigation
  if (/navigate|go to|section|show me|take me to/.test(lower)) {
    return "Which section would you like to visit? (About, Projects, Skills, Contact)";
  }
  // Web projects
  if (/(web|frontend|web development) project/.test(lower)) {
    return getCategoryProjects('web');
  }
  // ML/AI projects
  if (/(ml|ai|machine learning|data science) project/.test(lower)) {
    return getCategoryProjects('ml');
  }
  // Project Q&A
  const projectAnswer = getProjectAnswer(input);
  if (projectAnswer) return projectAnswer;
  // FAQ
  const faqAnswer = getFAQ(input);
  if (faqAnswer) return faqAnswer;
  // Tips
  if (/tip|beginner|advice/.test(lower)) {
    return getTips();
  }
  // Quiz
  if (/quiz|question/.test(lower)) {
    return getQuizQuestion();
  }
  // Blog/Updates
  if (/blog|update|recent|news|post/.test(lower)) {
    return getBlogPosts();
  }
  // Small talk
  if (/hi|hello|hey/.test(lower)) {
    return "Hello! How can I help you explore Abhay's portfolio today?";
  }
  if (/how are you/.test(lower)) {
    return "I'm just code, but I'm here to help!";
  }
  // Contact form intent
  if (/message|send|contact/.test(lower)) {
    return { contactForm: true };
  }
  // Fallback
  return "I'm not sure about that. Try asking about my projects, skills, resume, or say 'help'.";
}

const CONTACT_STEPS = [
  { key: 'name', prompt: "What's your name?" },
  { key: 'email', prompt: "What's your email address?" },
  { key: 'message', prompt: "What's your message?" }
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your AI Portfolio Chatbot. Ask me about any project, my skills, or say 'help'!" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [contactStep, setContactStep] = useState(null); // null or 0/1/2
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');

    // Contact form conversational flow
    if (contactStep !== null) {
      const stepKey = CONTACT_STEPS[contactStep].key;
      setContactData(data => ({ ...data, [stepKey]: input }));
      if (contactStep < CONTACT_STEPS.length - 1) {
        setTyping(true);
        setTimeout(() => {
          setMessages(msgs => [...msgs, { from: 'bot', text: CONTACT_STEPS[contactStep + 1].prompt }]);
          setTyping(false);
          setContactStep(contactStep + 1);
        }, 700);
      } else {
        setTyping(true);
        setTimeout(() => {
          setMessages(msgs => [...msgs, { from: 'bot', text: `Thank you, ${contactData.name || 'friend'}! Your message has been received. (This is a demo, no real message will be sent.)` }]);
          setTyping(false);
          setContactStep(null);
          setContactData({ name: '', email: '', message: '' });
        }, 900);
      }
      return;
    }

    // Normal chatbot logic
    setTyping(true);
    setTimeout(() => {
      const botReply = getBotResponse(input);
      if (typeof botReply === 'object' && botReply.contactForm) {
        setMessages(msgs => [...msgs, { from: 'bot', text: CONTACT_STEPS[0].prompt }]);
        setContactStep(0);
        setTyping(false);
      } else {
        setMessages(msgs => [...msgs, { from: 'bot', text: botReply }]);
        setTyping(false);
      }
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div>
      <button className={`chatbot-toggle${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Open chatbot">
        <FaRobot />
      </button>
      {open && (
        <div className="chatbot-window modern">
          <div className="chatbot-header">
            <span><FaRobot style={{ marginRight: 8 }} />AI Portfolio Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chatbot"><MdClose /></button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.from}`}> 
                <span className="avatar">{msg.from === 'bot' ? <FaRobot /> : <FaUserCircle />}</span>
                <span className="msg-content">{typeof msg.text === 'string' ? msg.text : msg.text}</span>
              </div>
            ))}
            {typing && (
              <div className="chatbot-msg bot typing">
                <span className="avatar"><FaRobot /></span>
                <span className="msg-content"><span className="typing-dots"><span>.</span><span>.</span><span>.</span></span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={contactStep !== null ? CONTACT_STEPS[contactStep].prompt : "Ask me anything about Abhay's projects..."}
              aria-label="Chatbot input"
              disabled={typing}
            />
            <button onClick={handleSend} className="chatbot-send" aria-label="Send message" disabled={typing}><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 