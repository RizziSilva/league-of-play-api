import { Request, Response, Router } from 'express';

export class ChampionsController {
    router: Router;
    constructor() {
        this.router = Router();
    }

    public routes(): void {
        this.router.get('/champions')((req: Request, res: Response) => {
            res.statusCode(200).send('This will be a champion list');
        });
    }
}
