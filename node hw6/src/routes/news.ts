import { Router } from "express";
import { getArticles, getArticlesById, createArticle, updateArticle, deleteArticle} from "../services/news.service";
const router = Router();

// Get all articles
router.get("/", async (req, res) => {
    try {
        const page = +(req.query.page ?? "0");
        const size = +(req.query.size ?? "20");
        const news = await getArticles(page, size);
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

//get special articles by id
router.get("/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const news = await getArticlesById(id);
        if (!news) return res.status(404).json({});
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

//create new articles
router.post("/", async (req, res) => {
    try {
        const { id } = req.user! as { id: number };
        const { title, text } = req.body;
        if (!title || !text)
            return res.status(400).json({ error: "An error occured about input" });

        const news = await createArticle({ title, text, userId: id });
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

//edit articles by id
router.put("/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const { title, text } = req.body;
        const news = await updateArticle (id, { text, title });
        if (!news) return res.status(404).json({});

        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

//delete special article
router.delete("/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const news = await deleteArticle(id);
        if (!news) return res.status(404).json({});
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

export { router };
