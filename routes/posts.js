//inizializzo anche qui express, uso la stessa porta del server dell'index e poi uso una costante router per i CRUDS
const express = require('express')
const router = express.Router()
const port = 3100


//index
router.get('/', function (req, res){
    res.json(posts)
})
//show
router.get('/:id', function (req, res){
    const id = parseInt(req.params.id)
    const postDetail = posts.find(element => element.id === id)
    res.json(postDetail);
})
//store
router.post('/', function (req, res){
    res.send('creazione nuovo post')
})
//update
router.put('/:id', function (req, res){
    const id = req.params.id
    res.send('modifica totale del post'+ req.params.id)
})
//modify
router.patch('/:id', function (req, res){
    const id = req.params.id
    res.send('modifica parziale del post'+ req.params.id)
})
//destroy
router.delete('/:id', function (req, res){
    const id = req.params.id
    res.send('eliminazione del post'+ req.params.id)
})



module.exports = router;