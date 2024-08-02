import express from 'express';
import { createNote, getNotes, editNote, shareNote } from '../controllers/salesController.js';

const router = express.Router();

// Create a new note
router.post('/notes', createNote);

// Get all notes
router.get('/notes', getNotes);

// Edit a note by ID
router.put('/notes/:id/', editNote);

// Share a note by ID (example: share via email)
router.post('/notes/:id/share', shareNote);

export default router;
