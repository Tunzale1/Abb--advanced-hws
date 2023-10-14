import fs from "fs"

let myArray = JSON.parse(fs.readFileSync("./data.json", "utf-8"));


export function getArticles(req, res) {
    try{
    const page = +(req.query.page) || 1
    const size = +(req.query.size) || 10
    const start = (page - 1) * size
    const end = start + size
    console.log(page, size, start, end);
    res.json(myArray.slice(start, end))
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function getArticlesById(req, res) {
    try{
    console.log(req.params);
    const post = myArray.find(p => p.id === +req.params.id)
    if (!post) return res.status(404).send("There are have not any article")
    res.json(post)
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function createArticle(req, res) {
    try {
        const newPost = {
            id: myArray.length + 1,
            title: req.body.title,
            text: req.body.text
        }
        myArray.push(newPost);
        res.json(newPost)
    } catch (error) {
        res.status(500).send("Error occured while creating")
    }
}



export function updateArticle(req, res) {
    try{
    const post = myArray.find(p => p.id === +req.params.id);
    if (!post) return res.status(404).send("there is error");
    post.title = req.body.title || post.title
    post.text = req.body.text || post.text
    res.json(post)
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function deleteArticle(req, res) {
    try{
    const id = +req.params.id
    const post = myArray.find(p => p.id === id);
    if (!post) return res.status(404).send('There are have not any article');

    myArray = myArray.filter(p => p.id !== id);
    res.status(200).json(post);
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}