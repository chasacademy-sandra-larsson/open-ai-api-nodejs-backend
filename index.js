import express from "express"
import dotenv from "dotenv"
import OpenAI from "openai" 

dotenv.config()

const app = express();
const port = 5001;


const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})


app.get("/question", async (request, response) => {

    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Vad är världens högsta berg?" }],
        model: "gpt-3.5-turbo",
    })

    const result = completion.choices[0].message.content;
    response.send(result)

});


app.listen(port, () => {
    console.log("Server started. Listening on port" + port)
})
