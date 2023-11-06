import { AppDataSource } from "../app-data-source.ts";
import { News } from "../models/news.entity.ts";
import { INews } from "../dto/news.dto.ts";


const articleRepository = AppDataSource.getRepository(News);

const getArticles = async ({ page, size }) => {
  const news = await articleRepository.find();
  const start = (page - 1) * size;
  const end = page * size;
  const data = news.slice(start, end);
  return data;
};

const getArticlesById = async (id: number) => {
  const news = await articleRepository.findOneBy({ id });
  return news;
};

const createArticle = async (body: INews) => {
  try {
    const newPost = await articleRepository.create(body);
    const results = await articleRepository.save(newPost);

    return results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateArticle = async (id: number, body: INews) => {
  const editedNews = await articleRepository.findOneBy({
    id,
  });
  articleRepository.merge(editedNews, body);
  const result = await articleRepository.save(editedNews);
  return result;
};

const deleteArticle = async (id: number) => {
  const results = await articleRepository.delete(id);
  return results;
};

export default {
  getArticles,
  getArticlesById,
  createArticle,
  updateArticle,
  deleteArticle,
};