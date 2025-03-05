// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: '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' });

// AI-Powered Code Review Endpoint
app.post("/review-code", async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ error: "No code provided" });

        const prompt = `Analyze the following code for best practices, security vulnerabilities, and optimization suggestions. Provide specific feedback:

        ${code}`;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "system", content: prompt }],
            temperature: 0.5,
            max_tokens: 500,
        });

        res.json({ review: response.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "AI review failed" });
    }
});

app.listen(port, () => {
    console.log(`AI Code Review API running on http://localhost:${port}`);
});
