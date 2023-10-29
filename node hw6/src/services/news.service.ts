import { AppDataSource } from "../app-data-source";
import { CreateArticleDto } from "../dto/createArticle.dto";
import { UpdateArticleDto } from "../dto/updateArticle.dto";
import { News } from "../models/News.entity";

const repository = AppDataSource.getRepository(News);

export function getArticles (page: number, size: number) {
    return repository.find({ skip: page * size, take: size });
}

export function getArticlesById (id: number) {
    return repository.findOne({ where: { id } });
}

export function createArticle({ text, title, userId }: CreateArticleDto) {
    return repository.save({ text, title, user: { id: userId } });
}

export function updateArticle(id: number, { text, title }: UpdateArticleDto) {
    return repository.save({ id, text, title });
}

export function deleteArticle(id: number) {
    return repository.delete(id);
}
