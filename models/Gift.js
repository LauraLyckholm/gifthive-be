import mongoose, { Schema } from "mongoose";

// Schema for the gift items
const giftItemSchema = new Schema({
    hiveId: {
        type: Schema.Types.ObjectId,
        ref: "Hive", // Reference to the Hive schema
    },
    gift: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    tags: {
        type: Array,
        default: []
    },
    bought: {
        type: Boolean,
        default: false,
    },
});

export const GiftModel = mongoose.model("Gift", giftItemSchema);
