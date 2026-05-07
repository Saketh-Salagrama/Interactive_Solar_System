# Solar System Simulation

An interactive solar system I built where you can click on planets to see their
data and ask an AI assistant about ISRO missions. The AI runs locally using
LLaMA3 through Ollama — no API keys needed.

Live Demo: https://saketh-salagrama.github.io/Interactive_Solar_System/

Note: The chat assistant needs local setup to work. The planet simulation
works directly on the live link.

---

Languages: Python, JavaScript
Frontend: HTML, CSS, JavaScript
Backend: FastAPI, LangChain, Uvicorn
AI: LLaMA3 (via Ollama), LangChain PromptTemplate
Tools: VS Code, Git, Ollama

---

What it does:
- 8 planets orbiting the sun with different speeds
- Click any planet to see its physical data and related ISRO mission
- Chat with an ISRO-themed AI assistant powered by LLaMA3
- Chat panel can be minimized

---

How the AI prompt evolved:
v1 — Sent raw question directly to Ollama — answers were too generic
v2 — Added ISRO scientist persona in the prompt — much more focused
v3 — Used LangChain PromptTemplate — clean and structured output

---

Run Locally:

Install Ollama from https://ollama.com/download, then:

    ollama pull llama3

    git clone https://github.com/Saketh-Salagrama/Interactive_Solar_System.git
    cd Interactive_Solar_System

    pip install fastapi uvicorn langchain-ollama langchain-core

    # Terminal 1
    ollama serve

    # Terminal 2
    uvicorn app:app --port 5000 --reload

    Then open index.html with Live Server in VS Code

---

Saketh — B.Tech CSE 3rd Year
Exploring Generative AI, LangChain and local LLM deployment.