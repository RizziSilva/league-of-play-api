import { Request, Response, Router } from 'express'

export class ChampionsController {
    router: Router
    constructor(router: Router) {
        this.router = router

        this.initChampionsRoutes()
    }

    private getAllChampions(): void {
        this.router.get('/champions', (req: Request, res: Response) => {
            res.status(200).send('Champions List!')
        })
    }

    private getSpecificChampion(): void {
        this.router.get('/champion', (req: Request, res: Response) => {
            const championName: String = req.body.championName
            res.status(200).send(championName)
        })
    }

    private initChampionsRoutes() {
        this.getAllChampions()
        this.getSpecificChampion()
    }
}

export default ChampionsController
