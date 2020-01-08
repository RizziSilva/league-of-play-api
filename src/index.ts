import './config'; //Config Environments variables.
import express from 'express';
import { applyMiddlewares } from './utils';

const app = express();
const port = process.env.PORT || 3000;

applyMiddlewares(app);

app.get('/', (req, res) => {
    res.send(`Starting Point!`);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
