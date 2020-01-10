import './config' //Config Environments variables.
import express from 'express'
import { applyMiddlewares, configRoutes } from './utils'

const app = express()
const port = process.env.PORT || 3000

applyMiddlewares(app)
configRoutes(app)

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
})
