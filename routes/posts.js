//inizializzo express, rimuovo anche la port che era inutile
const express = require('express')
const router = express.Router()

// Importiamo il controller
const postsController = require('../controller/postsController')

// INDEX - Restituisce la lista dei post con filtro per tag
router.get('/', postsController.index)

// SHOW - Restituisce un singolo post
router.get('/:id', postsController.show)

// STORE - Crea un nuovo post
router.post('/', postsController.store)

// UPDATE - Modifica totale di un post
router.put('/:id', postsController.update)

// MODIFY - Modifica parziale di un post
router.patch('/:id', postsController.modify)

// DESTROY - Elimina un post
router.delete('/:id', postsController.destroy)

module.exports = router;