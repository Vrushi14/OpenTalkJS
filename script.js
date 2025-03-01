import ollama from "ollama";

async function runChat() {
  try {
    const response = await ollama.chat({
      model: "llama3.2:1b",
      messages: [{ role: 'user', content: "Create a project proposal" }]
    });

    console.log("Chatbot Response:", response.message.content);
  } catch (error) {
    console.error("Error occurred:", error.message);
  wq}
}

runChat();