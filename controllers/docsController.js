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

  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  };

  posts.push(newPost); 

  console.log(posts);

  res.status(201).json(newPost);

};

const update = (req, res) => {

  const id = parseInt(req.params.id);

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  console.log(posts);

  res.json(post);

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