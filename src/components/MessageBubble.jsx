import React from 'react';

export default function MessageBubble({ role, text }) {
  return (
    <div className={`message-bubble ${role}`}>
      <div className="avatar">{role === 'assistant' ? '🤖' : '👤'}</div>
      <div className="bubble-text">{text}</div>
    </div>
  );
}