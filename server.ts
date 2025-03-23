import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { postRouter } from './routes/postRouter';
import { CORS_CONFIG, PORT } from './config';

const app = express();

const server = createServer(app);

const socketServer = new Server(server, {cors: CORS_CONFIG});

socketServer.on('connection', (socket) => {
    console.log(`User with socket: ${socket.id} make a connection to server.`);

    socket.on('message', (message: string) => {
        console.log('Server is getting a message from client:', { message });
        socketServer.emit('message', { sender: socket.id, message: message });
    });

    socket.on('disconnect', () => {
        console.log(`User with socket: ${socket.id} has been disconnected.`);
    })
});

app.use(express.json());

app.use('/posts', postRouter);

server.listen(PORT, () => {console.log('Server is running');});