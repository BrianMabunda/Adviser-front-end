import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages }) {
  const scrollRef = useRef(null);

  // Scroll to bottom every time messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className="chat-window" style={{ overflowY: 'auto', height: '400px' }}>
      {messages.map((m) => (
        <MessageBubble key={m.id} role={m.role} text={m.text} />
      ))}
      {/* This empty div acts as an anchor for the scroll */}
      <div ref={scrollRef} />
    </section>
  );
}