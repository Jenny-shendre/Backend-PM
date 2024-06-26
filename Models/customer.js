import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    projectName: {type: String, required: true},
    projectLocation: {type: String, required: true},
    customerId: {type: String, required: true, unique: true},
    attendant: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendant' }
},
{
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
