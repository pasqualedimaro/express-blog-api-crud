// Importiamo i dati dei posts
const posts = require('../data/posts')


// BONUS
// INDEX - Restituisce la lista dei post con filtro per tag
const index = (req, res) => {
    // Controllo se c'è un parametro di query "tag"
    const tagFilter = req.query.tag
    
    if (tagFilter) {
        // Filtro i post che contengono il tag specificato
        const filteredPosts = posts.filter(post => 
            post.tags.includes(tagFilter)
        )
        res.json(filteredPosts)
    } else {
        // Se non c'è filtro, restituisco tutti i post
        res.json(posts)
    }
}

// SHOW - Restituisce un singolo post
const show = (req, res) => {
    const id = parseInt(req.params.id)
    const postDetail = posts.find(element => element.id === id)
    
    if (!postDetail) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    
    res.json(postDetail)
}

// STORE - Crea un nuovo post
const store = (req, res) => {
    // Stampiamo i dati in arrivo nel terminale
    console.log('Dati ricevuti:', req.body)
    
    res.send('creazione nuovo post')
}

// UPDATE - Modifica totale di un post
const update = (req, res) => {
    const id = req.params.id
    res.send('modifica totale del post ' + id)
}

// MODIFY - Modifica parziale di un post
const modify = (req, res) => {
    const id = req.params.id
    res.send('modifica parziale del post ' + id)
}

// DESTROY - Elimina un post
const destroy = (req, res) => {
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
}

// Esportiamo tutte le funzioni
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}