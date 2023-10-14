import express from 'express';
import {
    getArticles,
    getArticlesById,
    createArticle,
    updateArticle,
    deleteArticle} from '../contollers/myController.js';

const router = express.Router();
router.get('/api/newsposts', getArticles);
router.get('/api/newsposts/:id', getArticlesById);
router.post('/api/newsposts', createArticle);
router.put('/api/newsposts/:id', updateArticle);
router.delete('/api/newsposts/:id', deleteArticle);

export default router;