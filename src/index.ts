import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Hello World</h1>
        </div>
    `);
});

app.listen('1234', () => {
    console.log('Listening on port 1234')
});