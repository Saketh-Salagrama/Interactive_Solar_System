from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_ollama import OllamaLLM
from  langchain_core.prompts import PromptTemplate

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"] )

llm = OllamaLLM(model="llama3")
prompt = PromptTemplate(
    input_variables = ["question"],
    template = """You are an ISRO aerospace scientist.
Answer accurately. Question: {question}"""
)
chain = prompt | llm
@app.post("/chat")
async def chat(data: dict):
    response = chain.invoke({"question" : data['message']})
    return {"response" : response}