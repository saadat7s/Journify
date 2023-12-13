const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const today = new Date();

const journalEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: today
    }
}, { timestamps: true });

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
module.exports = JournalEntry;
