    const express = require('express');
    const {
        getJournalEntries,
        getJournalEntry,
        createJournalEntry,
        updateJournalEntry,
        deleteJournalEntry,
    } = require('../controller/entryController');

    const router = express.Router();

    // Get all journal entries
    router.get('/', getJournalEntries);

    // Get a single journal entry
    router.get('/:id', getJournalEntry);

    // Create a new journal entry
    router.post('/', createJournalEntry);

    // Delete a journal entry
    router.delete('/:id', deleteJournalEntry);

    // Update a journal entry
    router.patch('/:id', updateJournalEntry);

    module.exports = router;
