const mongoose = require('mongoose');

const pesticideSchema = new mongoose.Schema({
    sellerId: { type: String, required: true },
    shopName: { type: String, required: true },
    productName: { type: String, required: true },
    category: { type: String, enum: ['pesticide', 'fertilizer', 'herbicide', 'fungicide'], required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    targetDiseases: { type: [String], required: true },
    suitableCrops: { type: [String], required: true },
    usageInstructions: { type: String },
    dosage: { type: String },
    effectivenessRating: { type: Number, min: 1, max: 5 },
    reviews: { type: [String] },
    shopLocation: { 
        district: { type: String, required: true },
        village: { type: String, required: true },
        state: { type: String, required: true }
    },
    operatingHours: { type: String },
    shopContact: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pesticide', pesticideSchema);