//inizializzo anche qui express, uso la stessa porta del server dell'index e poi uso una costante router per i CRUDS
const express = require('express')
const router = express.Router()
const port = 3100
const posts = require("../data/posts")

router.get('/', function (req, res){
    res.json(posts)
})

// SHOW - Restituisce un singolo post in formato JSON
router.get('/:id', function (req, res){
    const id = parseInt(req.params.id)
    const postDetail = posts.find(element => element.id === id)
    
    if (!postDetail) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    
    res.json(postDetail);
})

// STORE
router.post('/', function (req, res){
    res.send('creazione nuovo post')
})

// UPDATE
router.put('/:id', function (req, res){
    const id = req.params.id
    res.send('modifica totale del post ' + req.params.id)
})

// MODIFY
router.patch('/:id', function (req, res){
    const id = req.params.id
    res.send('modifica parziale del post ' + req.params.id)
})

// DESTROY - Elimina un singolo post dalla lista
router.delete('/:id', function (req, res){
    const id = parseInt(req.params.id)
    
    // Trova l'indice del post da eliminare
    const postIndex = posts.findIndex(element => element.id === id)
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    
    // Elimina il post dall'array
    posts.splice(postIndex, 1)
    
    // Stampa la lista aggiornata nel terminale
    console.log('Lista posts aggiornata:', posts)
    
    // Risponde con status 204 (No Content)
    res.status(204).send()
})


module.exports = router;