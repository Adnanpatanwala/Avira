const mongoose = require("mongoose");

const Tracking = new mongoose.Schema({
  awb: {
    type: String,
  },
  current_status: {
    type: String,
  },
  order_id: {
    type: String,
  },
  current_timestamp: {
    type: String,
  },
  etd: {
    type: String,
  },
  current_status_id: {
    type: String,
  },
  shipment_status: {
    type: String,
  },
  shipment_status_id: {
    type: String,
  },
  channel_order_id: {
    type: String,
  },
  channel: {
    type: String,
  },
  courier_name: {
    type: String,
  },
  scans: {
    type: [
      {
        String: { type: String },
        activity: { type: String },
        location: { type: String },
      },
    ],
  },
});

module.exports = mongoose.model("Tracking", Tracking);
