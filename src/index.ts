import express from 'express';
import { applyMiddlewares } from './utils';

const app = express();
const port = 3000 || process.env.PORT;

applyMiddlewares(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
