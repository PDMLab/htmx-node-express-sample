import { json, urlencoded } from 'body-parser'
import express from 'express'

const app = express()
app.use(urlencoded({ extended: true }))

app.use(express.static('static'))

app.post('/api/hello', (req, res) => {
  const name = req.body.name
  return res.type('html').status(200).send(`<div>hello, ${name}</div>`)
})

export default app
