# 🌌 Cosmic Chat AI

A high-fidelity, futuristic **RAG (Retrieval-Augmented Generation)** chatbot interface built with React. This project features a "Glass HUD" aesthetic inspired by sci-fi interfaces, designed for seamless interaction with specialized AI protocols.

---

## ✨ Features

* **Glassmorphism UI:** A modern interface utilizing `backdrop-filter` blurs, neon accents, and glowing borders to create a holographic feel.
* **Dual-Agent RAG Switching:** Seamlessly toggle between different specialized AI protocols (e.g., *Company PA* and *Code Assistant*) with dedicated state management.
* **Contextual Branding:** The UI dynamically updates "System Status," typography, and glow colors based on the active agent protocol.
* **Responsive Chat Experience:** Smooth message transitions and intelligent auto-scrolling chat history using React hooks.
* **Dark Mode Optimized:** Engineered for high-contrast, low-light environments with a custom radial-gradient cosmic backdrop.

---

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://reactjs.org/) (Powered by **Vite** for ultra-fast builds)
* **Styling:** CSS3 Custom Properties (Design Tokens), Glassmorphism, Flexbox/Grid
* **Backend Interface:** REST API via Async/Await Fetch

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** (v16.0.0 or higher)
* **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/BrianMabunda/cosmic-chat-ai.git
    cd cosmic-chat-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Endpoint:**
    Open `src/App.jsx` and update the `fetch` URL to point to your running LLM/RAG backend:
    ```javascript
    const response = await fetch('https://brianmabunda00-adviser-back-end.hf.space)/api/chat', {
      method: 'POST',
      // ... configuration
    });
    ```

4.  **Launch the application:**
    ```bash
    npm run dev
    ```

---

## 📁 Project Architecture

```text
src/
├── components/
│   ├── SideBar.jsx       # Agent switching & Navigation
│   ├── ChatWindow.jsx    # Message display area & Auto-scroll
│   ├── MessageBubble.jsx # Themed message containers
│   └── Composer.jsx      # Input HUD & Send logic
├── styles/
│   ├── token.css         # Global design variables (Neon/Glow)
│   ├── theme-dark.css    # Core Glassmorphism layouts
└── App.jsx               # Central State & API Orchestration
