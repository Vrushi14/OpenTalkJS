import fs from 'fs';
import ollama from 'ollama';

let n = 3;

async function ask_question(question, i) {
    try {
        const response = await ollama.chat({
            model: 'llama3.2:1b',
            messages: [{ role: 'user', content: question }],
        });
        const answer = response.message.content;
        fs.writeFile(`./Answers/a${i}.txt`, answer, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Answer for question ${i} written to ./Answers/a${i}.txt`);
        });
    } catch (error) {
        console.error(`Error processing question ${i}:`, error);
    }
}

for (let i = 1; i <= n; i++) {
    try {
        const questionPath = `./Questions/q${i}.txt`;
        const question = fs.readFileSync(questionPath, 'utf8');
        ask_question(question, i);
    } catch (err) {
        console.error(`Error reading file ${questionPath}:`, err);
    }
}
