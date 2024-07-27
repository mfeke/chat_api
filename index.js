let express = require("express")
let serverlessHttp = require('serverless-http')

const app = express()

app.get('/checkserver', (req, res)=>{
    res.send('Server is up!')
})

export const hander = serverlessHttp(app)