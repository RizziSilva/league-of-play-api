import { Router } from 'express';
import * as Middlewares from '../middleware';

export function applyMiddlewares(router: Router) {
    for (const middleware of middlewares) {
        middleware(router);
    }
}
