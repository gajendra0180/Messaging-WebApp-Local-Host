const mongoose = require("mongoose");

const whatsappSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
  },
  conversations: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Whatsapp", whatsappSchema);
