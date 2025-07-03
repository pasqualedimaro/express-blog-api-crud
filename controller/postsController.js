// Importiamo i dati dei posts
// //provo a testare l'errore 500
// const posts = undefined
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
const update = (req, res) => {
    // Recupero l'id dall'URL e lo trasformo in numero
    const id = parseInt(req.params.id)
    
    // Cerco il post tramite id
    const post = posts.find(element => element.id === id)
    
    // Piccolo controllo
    if (!post) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    
    // Aggiorniamo il post
    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags
    
    // Controlliamo i posts
    console.log(posts)
    
    // Restituiamo il post appena aggiornato
    res.json(post)
}

// MODIFY - Modifica parziale di un post
const modify = (req, res) => {
    const id = req.params.id
    res.send('modifica parziale del post ' + id)
}

// DESTROY - Elimina un post
const destroy = (req, res) => {
    // Recuperiamo l'id dall'URL e lo trasformiamo in numero
    const id = parseInt(req.params.id)
    
    // Cerchiamo il post tramite id
    const post = posts.find(element => element.id === id)
    
    // Piccolo controllo
    if (!post) {
        res.status(404)
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    
    // Rimuoviamo il post dal menu
    posts.splice(posts.indexOf(post), 1)
    
    // Stampa la lista aggiornata nel terminale
    console.log('Lista posts aggiornata:', posts)
    
    // Restituiamo lo status corretto
    res.sendStatus(204)
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