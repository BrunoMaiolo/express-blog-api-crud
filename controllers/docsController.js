const posts = require("../data/posts.js");



const index = (req, res) => {
    res.json(posts);
};

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
};

const store = (req, res) => {
    console.log(req.body);
    res.send("Creazione nuovo post");
};

const update = (req, res) => {
    const id = req.params.id;
    res.send(`Modifica del post ${id}`);
};

const destroy = (req, res) => {
     const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }

    posts.splice(index, 1);

    console.log(posts);

    res.sendStatus(204);
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};