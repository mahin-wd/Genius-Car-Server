const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// * middle wares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Genius Car Server is running');
})

app.listen(port, () => {
    condole.log(`Server is running on port ${port}`);
})