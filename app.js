const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/ui/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/build/index.html'));
});

// Start server
const PORT = 1000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
