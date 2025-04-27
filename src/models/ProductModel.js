const mongoose = require("mongoose")

const DataSchema = mongoose.Schema(
    {
        title: { type: String, unique: true, required: true },
        shortDes: { type: String, required: true },
        image: { type: String, required: true },
        star: { type: String, required: true },
        remark: { type: String, required: true },
        categoryID: { type: mongoose.Types.ObjectId, required: true },
        brandID: { type: mongoose.Types.ObjectId, required: true },
        
    },
    {timestamps: true, versionKey: false}
);
const ProductModel= mongoose.model("products", DataSchema);
module.exports = ProductModel;