import fs from 'fs';

import ollama from "ollama";

async function ask_question(q) {
    const response = await ollama.chat({
        model: "llama3.2:1b",
        messages: [{ role: "user", content: q }],
    });
    let ans = response.message.content;
    fs.writeFile(`a.txt`,ans,(err)=>{
        if(err){
            throw err;
        }
    });
}

ask_question(fs.readFileSync("q.txt", 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }));