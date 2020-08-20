import express from 'express';
import TypeController from './controllers/TypeController';
import PlaylistsController from './controllers/PlaylistsController';
import VideosController from './controllers/VideosController';
import CreateController from './controllers/CreateController';

const routes = express.Router();
const typeController = new TypeController();
const playlistsController = new PlaylistsController();
const videosController = new VideosController();
const createController = new CreateController();

routes.get('/type', typeController.getAllTypes);
routes.post('/type', typeController.create);

routes.get('/playlist/id', playlistsController.getIdFromTypeAndPlaylist)
routes.get('/playlist', playlistsController.getPlaylistNames);
routes.post('/playlist', playlistsController.create);

routes.post('/playlist/videos', videosController.create);
routes.get('/playlist/videos', videosController.getVideosFromPlaylist);

routes.post('/create', createController.create);

export default routes;