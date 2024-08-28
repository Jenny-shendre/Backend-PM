import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
  channelPartnerName: { type: String, required: true },
  channelPartnerCompanyName: { type: String, required: true },
  customerName: { type: String, required: true },
  customerMobileLastFour: { type: Number, required: true },
  projectName: { type: String, required: true },
  projectLocation: { type: String, required: true },
  partnerId: { type: String, required: true },
  attendant: { type: String, required: true },
  attendantName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  responseTime: { type: Date, required: true },
  meetingDuration: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
  agentPhoneNo : { type: String, required: true }
});

const Record = mongoose.model('records', RecordSchema);
export default Record;
