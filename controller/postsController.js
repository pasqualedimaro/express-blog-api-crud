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
    console.log('Dati ricevuti:', req.body)
    
    // Genero un nuovo ID
    const newId = posts[posts.length - 1].id + 1
    
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    
    posts.push(newPost)
    
    res.status(201).json(newPost)
}

// UPDATE - Modifica totale di un post
// La function è simile a quella utilizzata per show e destroy
const update = (req, res) => {
    // Recupero ID
    const id = parseInt(req.params.id)
    // Cerco il post tramite ID
    const postIndex = posts.findIndex(element => element.id === id)
    // Controllo
    console.log(postIndex);
    
    if (!postIndex) {
        return res.status(404).json({ error: 'Post non trovato' })
    }
    // Aggiorno il post mantenendo ID uguale
   posts[postIndex] = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Post aggiornato
    res.json(posts[postIndex])
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