import ollama from "ollama";


let input = process.argv[2];
let q;
let ans;
let n = Math.floor(Math.random() * 3 + 1);

async function ask_question(q) {
  try {
    const response = await ollama.chat({
      model: "llama3.2:1b",
      messages: [{ role: "user", content: q }],
    });
    ans = response.message.content;
    fs.writeFileSync(`Ans.txt`, ans, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (error) {
    console.error("Error during ask_question execution:", error);
  }
}

try {
  switch (input) {
    case "Professional_Writing":
    case "Creative_Writing":
    case "Academic_Writing":
      q = `./Category/${input}/q${n}.txt`;
      break;
    case "Technical_Content":
    case "Marketing_Content":
      q = `./Category/${input}/q${n}.txt`;
      break;
    default:
      throw new Error("Invalid input category.");
  }

  const question = fs.readFileSync(q, "utf-8");
  ask_question(question);
} catch (error) {
  console.error("Error occurred:", error);
}