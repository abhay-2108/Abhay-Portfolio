// Dynamic Portfolio Data (single source of truth)
// To add/remove projects, skills, certifications, or contact info, just update this file.

export const about = `I'm Abhay Tiwari, a passionate Computer Science Engineering student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning. I love building intelligent systems and full-stack web apps that solve real-world problems.`;

export const aiResume = "/Abhay_AI_Resume.pdf";
export const webResume = "/Abhay_Web_Resume.pdf";
export const resumeLink = aiResume; // For backward compatibility if needed
export const calendarLink = "https://calendly.com/abhay";

export const projects = [
  // Web Projects
  {
    title: "Bluestock IPO Tracker",
    category: "web",
    description: "A full-stack IPO tracking web app that enables users to track upcoming, ongoing, and listed IPOs. Features include admin-controlled company registration, document uploads, and protected routes.",
    details: "Built with React, Tailwind CSS, Django, PostgreSQL, and JWT authentication. Includes a secure admin panel for uploading DRHP/RHP documents and managing listings.",
    link: "https://github.com/abhay-2108/Bluestock-IPO-Web-App-Internship",
  },
  {
    title: "Healthcare Management System",
    category: "web",
    description: "A secure, scalable healthcare management web app using Node.js, Express.js, and EJS, integrating patient records, efficient appointment scheduling, documentation, financial transactions, real-time communication, and an AI chatbot for emergency guidance.",
    details: "Built a healthcare management system with Node.js, Express.js, EJS, HTML, CSS, JavaScript, and an AI chatbot (Google API integration).",
    link: "https://github.com/abhay-2108/Healthcare-Management-for-Doctors",
  },
  {
    title: "Basic Banking System",
    category: "web",
    description: "A robust banking system that supports secure, real-time transaction operations with comprehensive security protocols and a reliable MySQL database.",
    details: "Developed with Express.js, Node.js, and MySQL, ensuring secure, efficient banking transactions and robust data integrity.",
    link: "https://github.com/abhay-2108/Basic-Banking-System",
  },
  {
    title: "E-Commerce Website",
    category: "web",
    description: "Built with HTML5, CSS3, and JavaScript, this site emphasizes modern design and smooth transitions. It’s hosted on GitHub Pages and optimized for cross-device compatibility, ensuring a fast, engaging user experience.",
    details: "A fully responsive e-commerce website offering a seamless online shopping experience with an intuitive UI that lets users easily browse products, manage their shopping cart, and navigate the site effortlessly.",
    link: "https://github.com/abhay-2108/E-Commerce-Website",
  },
  {
    title: "Car Finder Web App",
    category: "web",
    description: "A responsive car browsing platform built with React and Node.js. It enables users to search, filter, and save favorite vehicles in a wishlist using local storage.",
    details: "Implemented search filters, dynamic content rendering, and responsive UI using React.js, Node.js, and custom CSS. Designed for both desktop and mobile experiences.",
    link: "https://github.com/abhay-2108/Car-Finder-Web-App",
  },
  // ML/AI Projects
  {
    title: "Fraud Detection System",
    category: "ml",
    description: "A deep learning-based credit card fraud detection system using an autoencoder neural network, developed in Python with Keras/TensorFlow. Achieved a training loss of 0.2362, validation loss of 0.1302, and set a reconstruction error threshold of 0.380976166091332 to effectively identify anomalous transactions.",
    details: "A deep learning-based credit card fraud detection system that leverages autoencoder neural networks to learn the inherent patterns of legitimate transactions.",
    link: "https://github.com/abhay-2108/Credit-Card-Fraud-Detection-Using-Autoencoders",
  },
  {
    title: "Real-Time Logistics ML Pipeline",
    category: "ml",
    description: "An end-to-end ML pipeline designed to analyze real-time logistics data. It predicts anomaly scores, fuel consumption, risk levels, and maintenance probability using streamed data.",
    details: "Built using Apache Kafka, Flask APIs, and classification models. The dashboard offers live updates, raw data views, and interactive visualization tools.",
    link: "https://github.com/abhay-2108/Real-Time-Logistics-ML-Pipeline",
  },
  {
    title: "Data Preprocessing AI Agent",
    category: "ml",
    description: "A LangChain-powered AI agent that automates dataset preprocessing through natural language input. It performs tasks like imputation, encoding, scaling, and outputs a cleaned dataset and summary report.",
    details: "Built using LangChain, FAISS, and vector storage. Generates explainable pipelines and PDF reports for transparency.",
    link: "https://github.com/abhay-2108/Data-Preprocessing-AI-Agent",
  },
  {
    title: "Real-Time YouTube Analytics Dashboard",
    category: "ml",
    description: "A real-time analytics tool using YouTube Data API and machine learning for engagement rate classification and sentiment analysis of video comments.",
    details: "Built using Logistic Regression, TF-IDF vectorization, and React frontend. Features dynamic video input and real-time publishing metrics.",
    link: "https://github.com/abhay-2108/Real-Time-Social-Media-Analysis",
  },
  {
    title: "Stock Market Prediction",
    category: "ml",
    description: "Developed an advanced system to predict stock prices by leveraging machine learning and deep learning techniques for market trend analysis.",
    details: "Implemented with Random Forest and ANN models, ensuring robust, accurate stock price forecasting.",
    link: "https://github.com/abhay-2108/Stock-Prediction-using-Random-Forest-and-ANN",
  },
  {
    title: "Movie Recommendation System",
    category: "ml",
    description: "A content-based movie recommendation system that analyzes movie data using advanced NLP techniques to extract semantic features and user preferences.",
    details: "Built with Scikit-learn, NLP, Flask, HTML, and CSS, ensuring a responsive and intuitive user interface.",
    link: "https://github.com/abhay-2108/Movie-Recommandation-System",
  },
  {
    title: "SMS Spam Detection",
    category: "ml",
    description: "Implements an SMS spam detection system that employs comprehensive text preprocessing, TF-IDF vectorization, and a Multinomial Naive Bayes classifier to accurately identify spam messages with 97.29% accuracy.",
    details: "Developed in Python with Flask API, ensuring robust and efficient spam detection with user-friendly interface.",
    link: "https://github.com/abhay-2108/SMS-Spam-Detection",
  },
  {
    title: "Breast Cancer Prediction",
    category: "ml",
    description: "A machine learning solution for breast cancer prediction employing Support Vector Classifier and Regressor, leveraging comprehensive feature extraction and model evaluation techniques.",
    details: "Implemented in Python using Scikit-learn and Pandas with data preprocessing, feature selection, and model tuning.",
    link: "https://github.com/abhay-2108/Breast-Cancer-Prediction",
  },
  {
    title: "AI Powered Resume Analyzer",
    category: "ml",
    description: "An AI-powered Resume Analyzer and ATS tool that leverages Google Gemini AI, Flask, and PyMuPDF for efficient text extraction and intelligent analysis.",
    details: "Developed in Python with Flask, integrating NLP libraries and ML models for accurate resume parsing and scoring.",
    link: "https://github.com/abhay-2108/abhay-2108-AI-Powered-Resume-Analyzer-ATS",
  }
];

export const webSkills = [
  // Frontend
  { category: 'Frontend', name: 'HTML5', level: 95 },
  { category: 'Frontend', name: 'CSS3', level: 90 },
  { category: 'Frontend', name: 'JavaScript', level: 90 },
  { category: 'Frontend', name: 'Bootstrap', level: 85 },
  { category: 'Frontend', name: 'Tailwind CSS', level: 90 },
  { category: 'Frontend', name: 'React.js', level: 90 },
  { category: 'Frontend', name: 'NextJS', level: 90 },
  { category: 'Frontend', name: 'Angular', level: 85 },
  { category: 'Frontend', name: 'Redux', level: 85 },
  { category: 'Frontend', name: 'React Native', level: 80 },
  { category: 'Frontend', name: 'EJS', level: 70 },
  { category: 'Frontend', name: 'Figma (UI/UX)', level: 75 },
  // Backend & Languages
  { category: 'Backend & Languages', name: 'Node.js', level: 80 },
  { category: 'Backend & Languages', name: 'Express.js', level: 75 },
  { category: 'Backend & Languages', name: 'RESTful APIs', level: 80 },
  { category: 'Backend & Languages', name: 'JWT Auth', level: 75 },
  // Databases & Tools
  { category: 'Databases & Tools', name: 'MySQL', level: 80 },
  { category: 'Databases & Tools', name: 'PostgreSQL', level: 75 },
  { category: 'Databases & Tools', name: 'MongoDB', level: 80 },
  { category: 'Databases & Tools', name: 'Supabase', level: 70 },
  { category: 'Databases & Tools', name: 'Docker', level: 75 },
  { category: 'Databases & Tools', name: 'Git', level: 85 },
  { category: 'Databases & Tools', name: 'GitHub', level: 85 },
  { category: 'Databases & Tools', name: 'Apache Kafka', level: 70 },
  // Other Skills
  { category: 'Other Skills', name: 'Team Collaboration & Agile Dev', level: 85 },
  { category: 'Other Skills', name: 'Communication & Problem Solving', level: 85 },
  { category: 'Other Skills', name: 'Data Structures & Algorithms (DSA)', level: 80 },
];

export const aiSkills = [
  // Backend & Languages
  { category: 'Backend & Languages', name: 'Python', level: 90 },
  { category: 'Backend & Languages', name: 'Java', level: 80 },
  { category: 'Backend & Languages', name: 'C', level: 90 },
  { category: 'Backend & Languages', name: 'C++', level: 90 },
  { category: 'Backend & Languages', name: 'Flask', level: 75 },
  { category: 'Backend & Languages', name: 'Django', level: 80 },
  // AI & ML
  { category: 'AI & ML', name: 'Machine Learning', level: 85 },
  { category: 'AI & ML', name: 'Deep Learning', level: 80 },
  { category: 'AI & ML', name: 'NLP (Natural Language Processing)', level: 80 },
  { category: 'AI & ML', name: 'TensorFlow', level: 75 },
  { category: 'AI & ML', name: 'PyTorch', level: 70 },
  { category: 'AI & ML', name: 'Scikit-learn', level: 80 },
  { category: 'AI & ML', name: 'LangChain & Agentic AI', level: 85 },
  { category: 'AI & ML', name: 'LLMs (Large Language Models)', level: 80 },
  { category: 'AI & ML', name: 'RAG Pipelines', level: 75 },
  { category: 'AI & ML', name: 'Vector Databases', level: 75 },
  // Other Skills
  { category: 'Other Skills', name: 'Prompt Engineering', level: 80 },
];

export const certifications = [
  {
    title: "Coursera AI/ML Specialization",
    organization: "Coursera",
    image: "/certificates/ai-ml-specialization.jpg"
  },
  {
    title: "Google Data Science Certificate",
    organization: "Google",
    image: "/certificates/google-data-science.jpg"
  },
  // Add more certificates as needed
];

export const certificates = [
  {
    title: "GEN AI using IBM Watsonx",
    organization: "IBM",
    description: "Completed IBM's GEN AI using IBM Watsonx certification, covering generative AI concepts, Watsonx platform, and practical applications."
  },
  {
    title: "Generative AI using Diffusion Models",
    organization: "Amazon Web Services",
    description: "Earned AWS's Generative AI using Diffusion Models certificate, focusing on advanced generative AI techniques and AWS cloud integration."
  }
  // Add more certificates as needed
];

export const contactInfo = {
  email: "abhaytiwari0821@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhay-tiwari-814051290/",
  github: "https://github.com/abhay-2108"
};

export const tips = [
  "Start with Python and basic statistics.",
  "Practice on real datasets from Kaggle.",
  "Understand the math behind ML algorithms.",
  "Build projects to apply your knowledge.",
  "Read research papers and follow AI news."
];

export const faq = [
  { question: "What is machine learning?", answer: "Machine learning is a subset of AI that enables systems to learn from data and improve over time without being explicitly programmed." },
  { question: "What is deep learning?", answer: "Deep learning is a type of machine learning that uses neural networks with many layers to model complex patterns in data." },
  // ... Add more FAQs
];

export const quiz = [
  {
    question: "What is supervised learning?",
    options: ["Learning with labeled data", "Learning without labels", "Learning by reinforcement"],
    answer: 0
  },
  {
    question: "Which library is commonly used for deep learning in Python?",
    options: ["NumPy", "TensorFlow", "Pandas"],
    answer: 1
  },
  // ... Add more quiz questions
];

export const blogPosts = [
  {
    title: "Building an AI-powered Resume Analyzer",
    link: "https://yourblog.com/ai-resume-analyzer",
    date: "2024-05-01",
    summary: "How I built an AI-powered tool to analyze and score resumes using NLP and ML."
  },
  // ... Add more blog posts
];

export const generalQuestions = [
  {
    question: "What is your background?",
    answer: "I'm a Computer Science Engineering student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning. I have hands-on experience in full-stack development and AI/ML projects."
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I've built a variety of projects including web applications, AI/ML models, data science pipelines, and intelligent dashboards. My portfolio includes both web and AI/ML projects."
  },
  {
    question: "Which programming languages are you most comfortable with?",
    answer: "I'm most comfortable with Python, JavaScript, C, C++, and Java."
  },
  {
    question: "What are your strongest technical skills?",
    answer: "My strongest skills are in AI/ML, Deep Learning, Python, React.js, Node.js, and full-stack web development."
  },
  {
    question: "Do you have experience working in teams?",
    answer: "Yes, I have collaborated on several team projects, both in academic and internship settings, using Agile methodologies and Git for version control."
  },
  {
    question: "How do you keep your skills up to date?",
    answer: "I regularly take online courses, participate in hackathons, read research papers, and build new projects to stay current with technology trends."
  },
  {
    question: "What are your career goals?",
    answer: "I aim to become a leading AI/ML engineer, contributing to impactful projects in artificial intelligence, and to keep learning and innovating in the tech space."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me via email at abhaytiwari0821@gmail.com, or connect with me on LinkedIn or GitHub (links are in the Contact section)."
  },
  {
    question: "Can I see your resume?",
    answer: "Absolutely! You can view or download my resume from the Resume section or ask the chatbot for it."
  },
  {
    question: "What makes you passionate about AI/ML?",
    answer: "I'm fascinated by the potential of AI/ML to solve real-world problems and create intelligent systems that make a difference in people's lives."
  }
];

export const skills = [...webSkills, ...aiSkills]; 