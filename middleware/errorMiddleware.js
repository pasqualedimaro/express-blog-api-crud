// creo un middleware per le rotte non registrate

const notFound = (req, res, next) => {
    res.status(404)
    res.json({
        error: "not found",
        message: "pagina non trovata"

    });
};

//creo middleware per errori del server 

function errorHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
    });
}

module.exports = {
    notFound, 
    errorHandler
}