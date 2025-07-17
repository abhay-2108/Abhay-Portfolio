import React, { useState } from "react";
import "../styles/projects.css";
import stock from "../assets/stock.png";
import credit from "../assets/credit.jpg";
import breast from "../assets/breast.webp";
import Shopping from "../assets/shopping.jpg";
import Vlab from "../assets/Vlab.jpeg";
import Dashboard from "../assets/Dashboard.jpg";
import Bank from "../assets/bank.jpg";
import Spam from "../assets/spam.jpg";
import Movie from "../assets/movie.jpg";
import AT from '../assets/AT1.jpg';
import Car from '../assets/Car.png';
import Bluestock from '../assets/Bluestock.png';
import Logistics from '../assets/Logistics.png';
import Youtube from '../assets/Youtube.png';
import Preprocess from '../assets/Preprocess.jpg';

const allProjects = {
  web: [
    {
      title: "Bluestock IPO Tracker",
      description:
        "A full-stack IPO tracking web app that enables users to track upcoming, ongoing, and listed IPOs. Features include admin-controlled company registration, document uploads, and protected routes.",
      details:
        "Built with React, Tailwind CSS, Django, PostgreSQL, and JWT authentication. Includes a secure admin panel for uploading DRHP/RHP documents and managing listings.",
      image: Bluestock, 
      link: "https://github.com/abhay-2108/Bluestock-IPO-Web-App-Internship",
    },
    {
      title: "Healthcare Management System",
      description:
        "A secure, scalable healthcare management web app using Node.js, Express.js, and EJS, integrating patient records, efficient appointment scheduling, documentation, financial transactions, real-time communication, and an AI chatbot for emergency guidance.",
      details:
        "Built a healthcare management system with Node.js, Express.js, EJS, HTML, CSS, JavaScript, and an AI chatbot (Google API integration).",
      image: Dashboard,
      link: "https://github.com/abhay-2108/Healthcare-Management-for-Doctors",
    },
    {
      title: "Basic Banking System",
      description:
        "A robust banking system that supports secure, real-time transaction operations with comprehensive security protocols and a reliable MySQL database.",
      details:
        "Developed with Express.js, Node.js, and MySQL, ensuring secure, efficient banking transactions and robust data integrity.",
      image: Bank,
      link: "https://github.com/abhay-2108/Basic-Banking-System",
    },
    {
      title: "E-Commerce Website",
      description:
        "Built with HTML5, CSS3, and JavaScript, this site emphasizes modern design and smooth transitions. It’s hosted on GitHub Pages and optimized for cross-device compatibility, ensuring a fast, engaging user experience.",
      details:
        "A fully responsive e-commerce website offering a seamless online shopping experience with an intuitive UI that lets users easily browse products, manage their shopping cart, and navigate the site effortlessly.",
      image: Shopping,
      link: "https://github.com/abhay-2108/E-Commerce-Website",
    },
    {
      title: "Car Finder Web App",
      description:
        "A responsive car browsing platform built with React and Node.js. It enables users to search, filter, and save favorite vehicles in a wishlist using local storage.",
      details:
        "Implemented search filters, dynamic content rendering, and responsive UI using React.js, Node.js, and custom CSS. Designed for both desktop and mobile experiences.",
      image: Car, 
      link: "https://github.com/abhay-2108/Car-Finder-Web-App",
    }
  ],
  ml: [
    {
      title: "Fraud Detection System",
      description:
        "A deep learning-based credit card fraud detection system using an autoencoder neural network, developed in Python with Keras/TensorFlow. Achieved a training loss of 0.2362, validation loss of 0.1302, and set a reconstruction error threshold of 0.380976166091332 to effectively identify anomalous transactions.",
      details:
        "A deep learning-based credit card fraud detection system that leverages autoencoder neural networks to learn the inherent patterns of legitimate transactions.",
      image: credit,
      link: "https://github.com/abhay-2108/Credit-Card-Fraud-Detection-Using-Autoencoders",
    },
    {
      title: "Real-Time Logistics ML Pipeline",
      description:
        "An end-to-end ML pipeline designed to analyze real-time logistics data. It predicts anomaly scores, fuel consumption, risk levels, and maintenance probability using streamed data.",
      details:
        "Built using Apache Kafka, Flask APIs, and classification models. The dashboard offers live updates, raw data views, and interactive visualization tools.",
      image: Logistics,
      link: "https://github.com/abhay-2108/Real-Time-Logistics-ML-Pipeline",
    },
    {
      title: "Data Preprocessing AI Agent",
      description:
        "A LangChain-powered AI agent that automates dataset preprocessing through natural language input. It performs tasks like imputation, encoding, scaling, and outputs a cleaned dataset and summary report.",
      details:
        "Built using LangChain, FAISS, and vector storage. Generates explainable pipelines and PDF reports for transparency.",
      image: Preprocess,
      link: "https://github.com/abhay-2108/Data-Preprocessing-AI-Agent",
    },
    {
      title: "Real-Time YouTube Analytics Dashboard",
      description:
        "A real-time analytics tool using YouTube Data API and machine learning for engagement rate classification and sentiment analysis of video comments.",
      details:
        "Built using Logistic Regression, TF-IDF vectorization, and React frontend. Features dynamic video input and real-time publishing metrics.",
      image: Youtube,
      link: "https://github.com/abhay-2108/Real-Time-Social-Media-Analysis",
    },
    {
      title: "Stock Market Prediction",
      description:
        "Developed an advanced system to predict stock prices by leveraging machine learning and deep learning techniques for market trend analysis.",
      details:
        "Implemented with Random Forest and ANN models, ensuring robust, accurate stock price forecasting.",
      image: stock,
      link: "https://github.com/abhay-2108/Stock-Prediction-using-Random-Forest-and-ANN",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A content-based movie recommendation system that analyzes movie data using advanced NLP techniques to extract semantic features and user preferences.",
      details:
        "Built with Scikit-learn, NLP, Flask, HTML, and CSS, ensuring a responsive and intuitive user interface.",
      image: Movie,
      link: "https://github.com/abhay-2108/Movie-Recommandation-System",
    },
    {
      title: "SMS Spam Detection",
      description:
        "Implements an SMS spam detection system that employs comprehensive text preprocessing, TF-IDF vectorization, and a Multinomial Naive Bayes classifier to accurately identify spam messages with 97.29% accuracy.",
      details:
        "Developed in Python with Flask API, ensuring robust and efficient spam detection with user-friendly interface.",
      image: Spam,
      link: "https://github.com/abhay-2108/SMS-Spam-Detection",
    },
    {
      title: "Breast Cancer Prediction",
      description:
        "A machine learning solution for breast cancer prediction employing Support Vector Classifier and Regressor, leveraging comprehensive feature extraction and model evaluation techniques.",
      details:
        "Implemented in Python using Scikit-learn and Pandas with data preprocessing, feature selection, and model tuning.",
      image: breast,
      link: "https://github.com/abhay-2108/Breast-Cancer-Prediction",
    },
    {
      title: "AI Powered Resume Analyzer",
      description:
        "An AI-powered Resume Analyzer and ATS tool that leverages Google Gemini AI, Flask, and PyMuPDF for efficient text extraction and intelligent analysis.",
      details:
        "Developed in Python with Flask, integrating NLP libraries and ML models for accurate resume parsing and scoring.",
      image: AT,
      link: "https://github.com/abhay-2108/abhay-2108-AI-Powered-Resume-Analyzer-ATS",
    }
  ]  
};

export { allProjects };

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");
  
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-filters">
        <button className={`btn ${selectedCategory === "web" ? "active" : ""}`} onClick={() => setSelectedCategory("web")}>Web Projects</button>
        <button className={`btn ${selectedCategory === "ml" ? "active" : ""}`} onClick={() => setSelectedCategory("ml")}>ML Projects</button>
      </div>
      <div className="projects-grid">
        {allProjects[selectedCategory].map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner" style={{ transition: "transform 0.6s ease-in-out" }}>
              <div className="card-front">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.details}</p>
                </div>
              </div>
              <div className="card-back">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <button className='btn-flip'>
                    <a target="_blank" className="resume" href={project.link}>Open Project</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <button className="btn-project">
        <a href="https://github.com/abhay-2108" target="_blank">View More Project</a>
      </button>
    </div>
  );
};

export default Projects;
