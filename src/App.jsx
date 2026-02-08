// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/SideBar';
import Composer from './components/Composer';
import './styles/token.css';
import './styles/theme-dark.css';
import './styles/theme-light.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(false); // Track LLM status

  const handleSend = async (msg) => {
    // 1. Add User Message immediately
    const userMessage = { id: Date.now().toString(), role: 'user', text: msg };
    setMessages((prev) => [...prev, userMessage]);
    
    setIsLoading(true);

    try {
      // 2. Call your LLM Endpoint
      const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: msg }), // Changed 'message' to 'prompt'
    });

      if (!response.ok) throw new Error('Failed to reach LLM');

   
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now().toString(), 
          role: 'assistant', 
          text: data.answer // Changed from data.response to data.answer
        },
]);
    } catch (error) {
      console.error("LLM Error:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: 'assistant', text: "Error: Could not connect to the local LLM." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className={`app-shell theme-${theme}`}>
    <Sidebar theme={theme} onToggleTheme={() => setTheme(dark)} />
    
    <main className="main-content">
      {/* High-Fidelity Header */}
      <header className="chat-header">
        {/* <h1>RAG Application</h1> */}
        <div className="header-actions">
           {/* Replace with the SVG atom icon provided earlier */}
           <div className="status-dot"></div>
        </div>
      </header>

      <ChatWindow messages={messages} />
      
      {isLoading && (
        <div className="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      )}
      
      <Composer onSend={handleSend} />
    </main>
  </div>
);
}