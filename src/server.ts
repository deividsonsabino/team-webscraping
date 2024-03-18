
import express from 'express'
import { Router, Request, Response } from 'express'

const app = express()

const route = Router()

app.use(express.json()) 

route.get('/', (req, res) => {
    res.json({ message: 'Hello world with Typescript' })
 })

app.use(route)
 
app.listen(3333, () => {
    'server running'
})