const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 Hello from Jenkins CI/CD!</h1>
        <p>Pipeline is working perfectly!</p>
        <p>Built with Jenkins + Docker + WSL</p>
    `);
});

app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});
