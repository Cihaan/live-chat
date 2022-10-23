import express from 'express';

const app: express = express();

const PORT: number = 3000;


app.listen(PORT, () => {
    console.log('server started on port 3000');
});