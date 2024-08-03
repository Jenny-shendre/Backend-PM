import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  channelID: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;
