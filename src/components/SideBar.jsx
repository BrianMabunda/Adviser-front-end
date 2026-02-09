import React from 'react';

// components/SideBar.jsx
export default function Sidebar(onClearChat) {
  return (
    <aside className="sidebar" style={{ width: '260px', borderRight: '1px solid rgba(0,229,255,0.1)', padding: '40px 20px' }}>
      <h2 style={{ color: 'var(--color-primary)', letterSpacing: '2px', fontSize: '1.2rem', marginBottom: '40px' }}>
        COSMIC CHAT AI
      </h2>
      <button className="new-chat" onClick={onClearChat} style={{
        width: '100%', background: 'transparent', border: '1px solid var(--color-primary)', 
        color: 'white', padding: '12px', borderRadius: '8px', cursor: 'pointer'
      }}>
        + NEW PROTOCOL
      </button>
    </aside>
  );
}
