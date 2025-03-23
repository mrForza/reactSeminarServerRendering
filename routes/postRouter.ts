import { Router } from 'express';
import { getAllPosts, getPostById } from '../controllers/postController';

export const postRouter = Router();

postRouter.get('/', getAllPosts);

postRouter.get('/:id', getPostById);``
