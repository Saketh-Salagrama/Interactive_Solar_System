async function sendPromptToOllama() {
    const input = document.getElementById('user-input');
    const userText = input.value;
    if(!userText) return;

    const chatHistory = document.getElementById('chat-history');

    chatHistory.innerHTML += `<p class="user-msg"><strong>You:</strong> ${userText}</p>`;
    input.value = '';
    const typeId = "msg-" + Date.now();


    chatHistory.innerHTML += `<p class="ai-msg" id = "${typeId}">Thinking....</p>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;

    try{
        //The process of fetching from the ollama
        const response = await fetch('http://localhost:11434/api/generate',
            {
                method : 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    model:'llama3',
                    prompt: `You are an expert AI Engineer at ISRO. Answer this question accurately and concisely: ${userText}`,
                    stream: false
                })

            }
        );

        const data = await response.json();
        document.getElementById(typeId).innerHTML = `<strong>Ollama:</strong> ${data.response}`;
        chatHistory.scrollTop = chatHistory.scrollHeight;

    }
    catch (error){
        document.getElementById(typeId).innerHTML = `<span style = "color:red">Error:Unable to connect to Ollama.</span>`;

    }

}
 document.getElementById("user-input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        sendPromptToOllama();
    }
  });

