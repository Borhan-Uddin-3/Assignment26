const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        userID: { type: mongoose.Types.ObjectId, required: true },
		name:{type: String, required:true},
		event_name: { type: String, required: true },
		event_data: { type: String, required: true },
		event_time: { type: String, required: true },
		location: { type: String, required: true },
		description: { type: String, required: true },
		
    },
    { timestamps: true, versionKey: false }
);

const ProfileModel = mongoose.model("profiles", DataSchema);
module.exports = ProfileModel;