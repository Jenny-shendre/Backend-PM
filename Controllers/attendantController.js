import Attendant from '../Models/Attendant.js';
import asyncHandler from '../utils/asyncHandler.js';


export const createAttendant = asyncHandler(async (req, res) => {
    const { name, status, team } = req.body;

    Attendant.create({
        name, 
        status,
        team
    })
    res.status(201).json({
        name, 
        status,
        team
    })
});


export const getAttendants = asyncHandler(async (req, res) => {
    const attendants = await Attendant.find();
    res.status(200).json(attendants);
});


export const getAttendantById = asyncHandler(async (req, res) => {
    const registeredAttendant = await Customer.findById(req.params.id);
    if (!registeredAttendant) return res.status(404).json({ message: 'Attendant not found' });
    res.status(200).json(registeredAttendant);
});


export const updateAttendant = asyncHandler(async (req, res) => {
    const { name, status, team } = req.body;
    const attendant = await Attendant.findByIdAndUpdate(req.params.id, { name, status, team }, { new: true, runValidators: true });
    if (!attendant) return res.status(404).json({ message: 'Attendant not found' });
    res.status(200).json(attendant);
});


export const deleteAttendant = asyncHandler(async (req, res) => {
    const attendant = await Attendant.findByIdAndDelete(req.params.id);
    if (!attendant) return res.status(404).json({ message: 'Attendant not found' });
    res.status(200).json({ message: 'Attendant deleted' });
});
