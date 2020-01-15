import { Router } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export class AppMiddlewares {
    router: Router
    constructor(router: Router) {
        this.router = router

        this.applyMmiddlewares()
    }

    applyMmiddlewares(): void {
        this.handleBodyParser()
        this.handleCors()
    }

    handleBodyParser(): void {
        this.router.use(bodyParser.json({ limit: '1.1mb' }))
        this.router.use(bodyParser.urlencoded({ extended: true }))
    }

    handleCors(): void {
        this.router.use(cors())
    }
}

export default AppMiddlewares
