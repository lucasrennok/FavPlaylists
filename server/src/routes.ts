import express from 'express';
import TypeController from './controllers/TypeController';
import PlaylistsController from './controllers/PlaylistsController';
import VideosController from './controllers/VideosController';

const routes = express.Router();
const typeController = new TypeController();
const playlistsController = new PlaylistsController();
const videosController = new VideosController();

routes.get('/type', typeController.getAllTypes);
routes.post('/type', typeController.create);

routes.get('/playlist/id', playlistsController.getIdFromTypeAndPlaylist)
routes.post('/playlist', playlistsController.create);

routes.post('/playlist/videos', videosController.create);
routes.get('/playlist/videos', videosController.getVideosFromPlaylist);

export default routes;