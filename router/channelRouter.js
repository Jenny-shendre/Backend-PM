import express from 'express';
import { getAllChannels, createChannel, getChannelById, updateChannel, deleteChannel } from '../Controllers/channelController.js';

const router = express.Router();

router.get('/getAllChannels', getAllChannels);
router.post('/', createChannel);
router.get('/fetchChannelBy', getChannelById);
router.put('/:id', updateChannel);
router.delete('/:id', deleteChannel);

export default router;
