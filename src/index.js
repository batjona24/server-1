import express from 'express';
import Range from './range.js';

const app = express();
app.use(express.json());

//GET
app.get('/range', async (req, res) => {
    const { numbers } = req.query;
    const numbers_array = numbers.split(',');
    if(numbers.length == 2) {
        const first = Number(numbers_array[0]);
        const last = Number(numbers_array[1]);
        const range = Range(first, last);
        await fsp.writeFile('log.json', range);
        res.status(200);
        res.json(range);
    }
    else {
        res.status(404);
        res.json("Please put only two numbers!"); 
    }
});

// POST
app.post('/range', async (req, res) => {
    const { numbers=[] } = req.body;
    if(numbers.length == 2) {
        const first = numbers[0];
        const last = numbers[1];
        const range = Range(first, last);
        await fsp.writeFile('log.json', range);
        res.status(200);
        res.json(range);
    }
    else {
        res.status(404);
        res.json("Please put only two numbers!"); 
    }
});

app.all('/*', async (req, res) => {
    res.status(404);
    res.json({ error: 'This route does not exist' });
});

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`)
});