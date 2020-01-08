import { Request, Response, Router } from 'express';

export function championsController(router: Router): void {
    router.get('/champions', (req: Request, res: Response) => {
        res.status(200).send('Champion List');
    });
}
