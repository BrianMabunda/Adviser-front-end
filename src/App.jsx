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
      const response = await fetch('https://brianmabunda00-adviser-back-end.hf.space/api/chat', {
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
  <div className="app-shell">
    <Sidebar />
    <main className="main-content">
      <header style={{ marginBottom: '20px' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>SYSTEM ACTIVE // STARLINER-01</span>
      </header>
      
      <ChatWindow messages={messages} />
      
      {isLoading && <div className="typing">Processing Query...</div>}
      
      <Composer onSend={handleSend} />
    </main>
  </div>
);
}