import express from 'express';
import { applyMiddlewares } from './utils/middleware-apply';

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json({ limit: '1.1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Starting Point!');
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
