
# AiCodeReviewAssistant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12. This is an AI-powered Code Review Assistant built using Angular 19 (standalone components) for the frontend and Node.js (Express.js) with OpenAI API for the backend. It allows developers to submit code snippets and receive AI-generated reviews, including best practices, security checks, and optimizations.

# Features

✅ AI-powered code analysis using OpenAI GPT-4 Turbo (or GPT-3.5 Turbo).
✅ Standalone Angular 19 frontend with a code input area.
✅ Express.js backend for processing AI responses.
✅ REST API communication between frontend and backend.
✅ Monaco Editor support (optional for VS Code-like experience).

# Tech Stack

Frontend: Angular 19 (Standalone Components, FormsModule, HttpClient)

Backend: Node.js, Express.js, OpenAI API

AI Model: OpenAI GPT-4 Turbo / GPT-3.5 Turbo

Styling: CSS

## Getting Started

1.  Clone the Repository
       
3.  Setup Backend
      cd backend
      npm install
    
    Create a .env file and add your OpenAI API key:
      touch .env
      OPENAI_API_KEY=your_api_key_here
    
    Run the backend server:
      node index.js
    
5.  Setup Frontend
      cd ../frontend
      npm install
      ng serve
    
    Open the browser at http://localhost:4200

    <img width="1420" alt="Screenshot 2025-03-05 at 10 02 05 AM" src="https://github.com/user-attachments/assets/065caadf-736c-4f78-a67e-ed9554b2047c" />


    

