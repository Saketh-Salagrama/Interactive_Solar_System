# 🚀 Solar System Simulation — ISRO Interactive Explorer

> An interactive solar system simulation powered by a local RAG-ready 
> LangChain + LLaMA3 backend, themed around ISRO missions and planetary science.

## 🌐 Live Demo
[Click here to view](https://YOURUSERNAME.github.io/solar-system-sim/)

> ⚠️ Chat assistant requires local setup (see below). 
> Simulation and planet data work fully on the live link.

---

## 🏗️ Architecture


## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Animation | CSS Keyframes |
| AI Framework | LangChain + LCEL Chain |
| LLM | LLaMA3 via Ollama (local) |
| Backend API | FastAPI + Uvicorn |
| Vector Ready | Architecture supports ChromaDB RAG |

## ✨ Features
- 🪐 8 planets with real relative orbital speed ratios
- 🤖 ISRO-persona AI assistant (LangChain + LLaMA3)
- 📋 Click any planet → physical data + ISRO mission info
- 💬 Minimizable chat panel with Enter key support

## ⚙️ Run Locally

### Prerequisites
```bash
# Install Ollama
# Windows: https://ollama.com/download
# Linux/Mac:
curl -fsSL https://ollama.com/install.sh | sh

# Pull LLaMA3 model (~4.7GB)
ollama pull llama3
```

### Setup
```bash
# Clone the repo
git clone https://github.com/YOURUSERNAME/solar-system-sim.git
cd solar-system-sim

# Install Python dependencies
pip install fastapi uvicorn langchain-ollama langchain-core

# Terminal 1 — Start Ollama
ollama serve

# Terminal 2 — Start FastAPI backend
uvicorn app:app --port 5000 --reload

# Terminal 3 — Open index.html with Live Server in VS Code
```

## 🧠 Prompt Engineering
| Version | Approach | Result |
|---------|----------|--------|
| v1 | Raw question to Ollama JS | Generic answers |
| v2 | ISRO persona system prompt | Domain focused |
| v3 | LangChain PromptTemplate + LCEL | Structured, production-ready |

## 👨‍💻 Author
**Laksh** — B.Tech CSE, 3rd Year  
GenAI Explorer | LangChain | Local LLM Deployment