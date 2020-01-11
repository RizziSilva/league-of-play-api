import { Router } from 'express'
import Middlewares from 'api-middleware'

export function applyMiddlewares(router: Router): void {
    for (const middleware of Middlewares) {
        middleware(router)
    }
}
