const formatMessages = require('./formatMessages');
const summaryPrompts = require('./summaryPrompts');
<<<<<<< HEAD
=======
const handleInputs = require('./handleInputs');
const instructions = require('./instructions');
>>>>>>> main
const truncate = require('./truncate');
const createVisionPrompt = require('./createVisionPrompt');
const createContextHandlers = require('./createContextHandlers');

module.exports = {
  ...formatMessages,
  ...summaryPrompts,
<<<<<<< HEAD
=======
  ...handleInputs,
  ...instructions,
>>>>>>> main
  ...truncate,
  createVisionPrompt,
  createContextHandlers,
};
