const index = (req, res) => {
    res.send("Lista dei post");
};

const show = (req, res) => {
    const id = req.params.id;
    res.send(`Dettaglio del post ${id}`);
};

const store = (req, res) => {
    res.send("Creazione nuovo post");
};

const update = (req, res) => {
    const id = req.params.id;
    res.send(`Modifica del post ${id}`);
};

const destroy = (req, res) => {
    const id = req.params.id;
    res.send(`Cancellazione del post ${id}`);
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};