const express = require('express');
const router = express.Router();
const Quotation = require('../models/quotation');

// Add a new quotation
router.post('/add', async (req, res) => {
    try {
        const quotation = new Quotation(req.body);
        await quotation.save();
        res.status(201).send("Quotation added successfully!");
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get all quotations
router.get('/', async (req, res) => {
    try {
        const quotations = await Quotation.find();
        res.json(quotations);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Edit a quotation
router.put('/edit/:id', async (req, res) => {
    try {
        const updatedQuotation = await Quotation.findByIdAndUpdate(
            req.params.id,   // ID from the URL parameter
            req.body,        // Data to update
            { new: true }    // Option to return the updated document
        );

        if (!updatedQuotation) {
            return res.status(404).send("Quotation not found");
        }

        res.status(200).json({ message: "Quotation updated successfully", data: updatedQuotation });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


// Delete a quotation
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedQuotation = await Quotation.findByIdAndDelete(req.params.id);

        if (!deletedQuotation) {
            return res.status(404).send("Quotation not found");
        }

        res.status(200).json({ message: "Quotation deleted successfully", data: deletedQuotation });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


module.exports = router;
