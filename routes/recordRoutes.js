const express = require('express');
const router = express.Router();
const Record = require('../models/record');
const mongoose = require('mongoose');

// GET all records
router.get('/', async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one record by ID
router.get('/:id', getRecord, (req, res) => {
  res.json(res.record);
});

// CREATE new record
router.post('/', async (req, res) => {
  const record = new Record({
    channelPartnerName: req.body.channelPartnerName,
    channelPartnerCompanyName: req.body.channelPartnerCompanyName,
    customerName: req.body.customerName,
    customerMobileLastFour: req.body.customerMobileLastFour,
    projectName: req.body.projectName,
    projectLocation: req.body.projectLocation,
    partnerId: req.body.partnerId,
    attendant: req.body.attendant,
    attendantName: req.body.attendantName
  });

  try {
    const newRecord = await record.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE record by ID
router.put('/:id', getRecord, async (req, res) => {
  if (req.body.channelPartnerName != null) {
    res.record.channelPartnerName = req.body.channelPartnerName;
  }
  if (req.body.channelPartnerCompanyName != null) {
    res.record.channelPartnerCompanyName = req.body.channelPartnerCompanyName;
  }
  if (req.body.customerName != null) {
    res.record.customerName = req.body.customerName;
  }
  if (req.body.customerMobileLastFour != null) {
    res.record.customerMobileLastFour = req.body.customerMobileLastFour;
  }
  if (req.body.projectName != null) {
    res.record.projectName = req.body.projectName;
  }
  if (req.body.projectLocation != null) {
    res.record.projectLocation = req.body.projectLocation;
  }
  if (req.body.partnerId != null) {
    res.record.partnerId = req.body.partnerId;
  }
  if (req.body.attendant != null) {
    res.record.attendant = req.body.attendant;
  }
  if (req.body.attendantName != null) {
    res.record.attendantName = req.body.attendantName;
  }

  res.record.updatedAt = Date.now();

  try {
    const updatedRecord = await res.record.save();
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ObjectId' });
    }
    
    // Find the record and delete it
    const result = await Record.deleteOne({ _id: id });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Deleted Record' });
  } catch (err) {
    console.error('Error in delete route:', err); // Debugging line
    res.status(500).json({ message: 'Error occurred while deleting record' });
  }
});
// DELETE record by ID
// router.delete('/:id', getRecord, async (req, res) => {
//   try {
//     console.log("ressss----",res.record)
//     await res.record.remove();
//     res.json({ message: 'Deleted Record' });
//   } catch (err) {
//     res.status(500).json({ message: "delete record me error hai" });
//   }
// });

// Middleware function to get record by ID
async function getRecord(req, res, next) {
  let record;
  try {
    record = await Record.findById(req.params.id);
    if (record == null) {
      return res.status(404).json({ message: 'Cannot find record' });
    }
  } catch (err) {
    return res.status(500).json({ message: "getrecord me error hai" });
  }

  res.record = record;
  next();
}

module.exports = router;
