import app from './app'

const server = app.listen(3000, () => {
  console.log('server is listening')
})

process.on('SIGINT', () => {
  server.close()
})
