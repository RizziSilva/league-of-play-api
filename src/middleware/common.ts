import { Router } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export function handleBodyRequestParser(router: Router): void {
    router.use(bodyParser.json({ limit: '1.1mb' }))
    router.use(bodyParser.urlencoded({ extended: true }))
}

export function handleCors(router: Router): void {
    router.use(cors())
}
