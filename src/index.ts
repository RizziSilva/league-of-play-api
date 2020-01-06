import express from "express"

const app = express()
const port = 3000 || process.env.PORT

app.get("/", (req, res) => {
    res.send("Starting Point!")
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
})