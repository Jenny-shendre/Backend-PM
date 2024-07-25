import express from 'express';
import welcomeToROF from '../Controllers/homeController.js'
const router = express.Router();


router.get('/home',welcomeToROF);

export default router;