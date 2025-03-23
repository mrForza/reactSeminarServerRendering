import axios from 'axios';
import { Request, Response } from 'express';
import { Post } from '../entities/postEntity';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (request: Request, response: Response) => {
    try {
        const exiosResponse = await axios.get<Post[]>(URL);
        const data = exiosResponse.data;
        response.json(data);
    } catch (error) {
        response.status(400).json({ message: 'Something went wrong while fetching posts' });
    }
}

export const getPostById = async (request: Request, response: Response) => {
    const id = request.params['id'];

    try {
        const exiosResponse = await axios.get<Post>(URL + `/${id}`);
        const data = exiosResponse.data;

        response.json(data);
    } catch (error) {
        response.status(400).json({
            message: `Something went wrong while fetching posts with id: ${id}`
        });
    }
}