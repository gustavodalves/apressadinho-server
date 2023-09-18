import mongoose from 'mongoose';

const AppUseSchema = new mongoose.Schema({
    _id: String,
    latitude: Number,
    longitude: Number,
    startDate: Date,
    endDate: Date,
    createdAt: { type: Date, default: new Date() }
});

export default mongoose.model('AppUse', AppUseSchema);
