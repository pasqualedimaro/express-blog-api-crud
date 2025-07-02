// init package.json e installo express
//creo il file gitignore per il node_modules
//importo i file dalla repo precedente

//inizio a scrivere express
const express = require("express")
const app = express()
const port = 3100
// aggiungo qui il percorso
const PostRouter = require("./routes/posts")

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