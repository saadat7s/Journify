const JournalEntry = require('../models/entryModel');
const mongoose = require('mongoose');

// Get all journal entries
const getJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({}).sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single journal entry
const getJournalEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such journal entry' });
  }

  try {
    const entry = await JournalEntry.findById(id);

    if (!entry) {
      return res.status(404).json({ error: 'No such journal entry exists' });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new journal entry
const createJournalEntry = async (req, res) => {
  console.log(req.body);
  const { title, content, date } = req.body;

  try {
      const entry = await JournalEntry.create({ title, content, date });
      res.status(201).json(entry);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


// Update a journal entry
const updateJournalEntry = async (req, res) => {
  const { id } = req.params;
  console.log('Entry ID:', id);
  console.log('Request Body:', req.body); // Log the request body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log('Invalid ID:', id);
    return res.status(404).json({ error: 'No such journal entry' });
  }

  try {
    const entry = await JournalEntry.findByIdAndUpdate(id, req.body, { new: true });

    if (!entry) {
      console.log('Entry not found:', id);
      return res.status(404).json({ error: 'No such journal entry exists' });
    }

    console.log('Updated Entry:', entry);

    res.status(200).json(entry);
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ error: error.message });
  }
};




// Delete a journal entry
const deleteJournalEntry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such journal entry' });
  }

  try {
    const entry = await JournalEntry.findOneAndDelete({ _id: id });

    if (!entry) {
      return res.status(404).json({ error: 'No such journal entry exists' });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getJournalEntries,
  getJournalEntry,
  createJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
};
