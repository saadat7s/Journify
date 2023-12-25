const JournalEntry = require('../models/entryModel');
const mongoose = require('mongoose');

const entryController = {
  getJournalEntries: async (req, res) => {
    try {
      // Check if the user is authenticated
      if (!req.session.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Get the user ID from the session
      const userId = req.session.user._id;

      // Fetch all entries associated with the user
      const entries = await JournalEntry.find({ user: userId });

      res.status(200).json(entries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getJournalEntry: async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such journal entry' });
    }

    try {
      const userId = req.session.user._id;

      const entry = await JournalEntry.findOne({ _id: id, user: userId });

      if (!entry) {
        return res.status(404).json({ error: 'No such journal entry exists' });
      }

      res.status(200).json(entry);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createJournalEntry: async (req, res) => {
    const { title, content, date } = req.body;

    try {
      const userId = req.session.user._id;

      const entry = await JournalEntry.create({ title, content, date, user: userId });

      res.status(201).json(entry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateJournalEntry: async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such journal entry' });
    }

    try {
      const userId = req.session.user._id;

      const entry = await JournalEntry.findOneAndUpdate({ _id: id, user: userId }, req.body, { new: true });

      if (!entry) {
        return res.status(404).json({ error: 'No such journal entry exists' });
      }

      res.status(200).json(entry);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteJournalEntry: async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such journal entry' });
    }

    try {
      const userId = req.session.user._id;

      const entry = await JournalEntry.findOneAndDelete({ _id: id, user: userId });

      if (!entry) {
        return res.status(404).json({ error: 'No such journal entry exists' });
      }

      res.status(200).json(entry);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = entryController;
