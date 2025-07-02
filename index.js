// init package.json e installo express
//creo il file gitignore per il node_modules
//importo i file dalla repo precedente

//inizio a scrivere express
const express = require("express")
const app = express()
const port = 3100
const PostRouter = require("./routes/posts")

// Aggiungo il Middle per il json
app.use(express.json())

// avvio server di express nella porta che in questo caso è il mio pc
app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})

// creo una prima rotta che mi restituisce un semplice testo
app.get("/", (req, res) => (
    res.send("Benvenuti nel mio blog")
))

// registro router 
app.use('/api/posts', PostRouter)