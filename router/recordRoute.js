import express from 'express';
const router = express.Router();
import {
  getAllRecords,
  getRecord,
  newRecord,
  updateRecord,
  deleteRecord
} from '../Controllers/recordController.js'
// GET all records
router.get('/getAllRecords',getAllRecords);

// GET one record by ID
router.get('/getRecordBy/:id', getRecord);

// CREATE new record
router.post('/newRecord', newRecord);
  
// UPDATE record by ID
router.post('/updateRecord/:id', updateRecord); 
  
// DELETE record by ID
router.post('/deleteRecord/:id', deleteRecord);

export default router;
