import { Router } from 'express'
import Routes from 'api-controller'

export function configRoutes(router: Router): void {
    for (const route of Routes) {
        route(router)
    }
}
