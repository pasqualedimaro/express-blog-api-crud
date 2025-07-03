// creo un middleware per le rotte non registrate

const notFound = (req, res, next) => {
    res.status(404)
    res.json({
        error: "not found",
        message: "pagina non trovata"

    });
};

module.exports = {notFound}