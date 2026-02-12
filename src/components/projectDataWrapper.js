import stock from "../assets/stock.png";
import credit from "../assets/credit.jpg";
import breast from "../assets/breast.webp";
import Shopping from "../assets/shopping.jpg";
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

export const allProjects = {
    web: [
        {
            title: "Bluestock IPO Tracker",
            description: "A full-stack IPO tracking web app...",
            details: "Built with React, Tailwind CSS, Django, PostgreSQL, and JWT authentication.",
            image: Bluestock,
            link: "https://github.com/abhay-2108/Bluestock-IPO-Web-App-Internship",
        },
        {
            title: "Healthcare Management System",
            description: "A secure, scalable healthcare management web app...",
            details: "Built with Node.js, Express.js, EJS, and AI chatbot integration.",
            image: Dashboard,
            link: "https://github.com/abhay-2108/Healthcare-Management-for-Doctors",
        },
        {
            title: "Basic Banking System",
            description: "A robust banking system for real-time transactions.",
            details: "Developed with Express.js, Node.js, and MySQL.",
            image: Bank,
            link: "https://github.com/abhay-2108/Basic-Banking-System",
        },
        {
            title: "E-Commerce Website",
            description: "Modern design with smooth transitions.",
            details: "Built with HTML5, CSS3, and Vanilla JavaScript.",
            image: Shopping,
            link: "https://github.com/abhay-2108/E-Commerce-Website",
        },
        {
            title: "Car Finder Web App",
            description: "Responsive car browsing platform.",
            details: "Implemented search filters and dynamic rendering via React.",
            image: Car,
            link: "https://github.com/abhay-2108/Car-Finder-Web-App",
        }
    ],
    ml: [
        {
            title: "Fraud Detection System",
            description: "Deep learning-based credit card fraud detection.",
            details: "Leverages autoencoder neural networks for anomaly detection.",
            image: credit,
            link: "https://github.com/abhay-2108/Credit-Card-Fraud-Detection-Using-Autoencoders",
        },
        {
            title: "Real-Time Logistics Pipeline",
            description: "End-to-end ML pipeline for logistics analysis.",
            details: "Built using Apache Kafka, Flask APIs, and visualization tools.",
            image: Logistics,
            link: "https://github.com/abhay-2108/Real-Time-Logistics-ML-Pipeline",
        },
        {
            title: "Data Preprocessing AI Agent",
            description: "LangChain-powered agent for dataset automation.",
            details: "Built using LangChain, FAISS, and vector storage.",
            image: Preprocess,
            link: "https://github.com/abhay-2108/Data-Preprocessing-AI-Agent",
        },
        {
            title: "YouTube Analytics Dashboard",
            description: "Sentiment analysis and engagement classification.",
            details: "Built using Logistic Regression, TF-IDF, and React.",
            image: Youtube,
            link: "https://github.com/abhay-2108/Real-Time-Social-Media-Analysis",
        },
        {
            title: "Stock Market Prediction",
            description: "Advanced price prediction system.",
            details: "Implemented with Random Forest and ANN models.",
            image: stock,
            link: "https://github.com/abhay-2108/Stock-Prediction-using-Random-Forest-and-ANN",
        }
    ]
};
