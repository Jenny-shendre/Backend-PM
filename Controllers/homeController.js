import asyncHandler from '../utils/asyncHandler.js';

export const welcomeToROF = asyncHandler(async (req, res) => {
   return res.json( {msg:"WELCOME TO ROF"} )
});

export default welcomeToROF