import './config' //Config Environments variables.
import express, { Application } from 'express'
import { applyMiddlewares, configRoutes } from 'api-utils'

export class App {
    app: Application
    port: String
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'

        this.initServer()
        this.initListen()
    }

    private initServer(): void {
        applyMiddlewares(this.app)
        configRoutes(this.app)
    }

    private initListen(): void {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${this.port}`)
        })
    }
}

new App()
