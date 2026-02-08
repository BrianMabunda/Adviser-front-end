import React from 'react';

export default function Sidebar({ theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">RAG Chat</h2>
      <button className="new-chat">+ New Chat</button>
      
    </aside>
  );
}