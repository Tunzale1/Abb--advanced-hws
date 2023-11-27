import { Router, Request, Response } from "express";
import newsService from "../services/news.service.ts";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { page, size } = req.query;
    const news = await newsService.getArticles({ page, size });
    res.setHeader("content-type", "application/json").status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const news = await newsService.getArticlesById(+req.params.id);
    if (!news) {
      res.status(404).json({ error: "News not found" });
    } else {
      res.status(200).json(news);
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newPost = await newsService.createArticle(req.body);
    res.status(201).json({ message: "created!", newPost });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const result = await newsService.updateArticle(+req.params.id, req.body);
    res.setHeader("content-type", "application/json").status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const result = await newsService.deleteArticle(+req.params.id);
    return res
      .setHeader("content-type", "application/json")
      .status(200)
      .json(result);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

export default router;