import chat from '../assets/Projects/ChatX.png'
import LearnLoop from '../assets/Projects/LearnLoop.png'
import snake from '../assets/Projects/snake.png'
import cart from '../assets/Projects/cart.png'
import chunk from '../assets/Projects/chunk.png'

export const projects = [
    {
        title : "ChatX",
        description : "A real-time chat application built with React, Node.js, and Socket.IO. It supports user authentication, private messaging, and group chats. It features a hybrid AI model that detects and filters toxic messages for a safe chat experience.",
        tech : ["React.js","Express.js","MongoDB","Node.js","Socket.io","Tailwind CSS","ShadCN"],
        image : chat,
        github : "https://github.com/niru128/ChatX",
    },
    {
        title : "LearnLoop",
        description : "LearnLoop is a real-time skill-swapping platform built with the MERN stack, Socket.IO, and Zustand, enabling users to exchange skills through interactive requests and messaging.",
        tech : ["React.js","Express.js","MongoDB","Node.js","Socket.io","Tailwind CSS","Zustand"],
        image : LearnLoop,
        github : "https://github.com/niru128/LearnLoop"
    },
    {
        title : "Customer Chunk Prediction",
        description : " A machine learning project that analyzes customer behavior to identify those likely to stop using a service. It uses classification algorithms on historical data to help businesses take proactive retention measures.",
        tech : ["Python","Streamlit","ANN","Tensorflow","SciKit-Learn"],
        image : chunk,
        github : "https://github.com/niru128/Customer-Churn-Prediction"
    },
    {
        title : "Stock Trend Analysis",
        description : " Stock Trend Analysis is a data-driven project designed to analyze historical stock prices and predict future movements. The project utilizes various machine learning algorithms to identify patterns and make predictions. This tool can be useful for traders, analysts, and anyone interested in understanding stock market dynamics.",
        tech : ["Python","Streamlit","LSTM","Tensorflow","SciKit-Learn"],
        image : "../assets/Projects/LearnLoop.png",
        github : "https://github.com/niru128/StockTrendAnalysis"
    },
    {
        title : "Serpent Sprint",
        description : "Serpent Sprint is a classic snake game built using HTML, CSS, and JavaScript. It features smooth controls, increasing difficulty, and a responsive design for an engaging and nostalgic gaming experience.",
        tech : ["HTML","CSS","JavaScript"],
        image : snake,
        github : "https://github.com/niru128/SerpentSprint"
    },
    {
        title : "YourCart",
        description : "A user-friendly e-commerce web application",
        tech : ["JavaScript", "CSS", "HTML"],
        image : cart,
        github : "https://github.com/niru128/YourCart"
    },
   
    {
        title : "Simple Calulator",
        description : "The simple calculator will perform basic arithmetic operations: addition, subtraction, multiplication, and division. The user interface will consist of a display area to show input and results, and buttons for digits (0-9), operations (+, -, *, /), and control functions (clear, equals).",
        tech : ["Java", "JavaFX"],
        image : "../assets/Projects/LearnLoop.png",
        github : "https://github.com/niru128/Simple_Calculatorr"
    },
]
