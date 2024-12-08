const mongoose = require('mongoose');


const QuotationSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String },
    roomType: { type: String, required: true },
    
    width: { type: Number, required: true },
    length: { type: Number, required: true }
,
color: { type: String, required: true },
paintType: { type: String, required: true },
    quotationID: { type: String, unique: true },
    quotationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quotation', QuotationSchema);
