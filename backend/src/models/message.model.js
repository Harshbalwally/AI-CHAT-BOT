import mongoose from "mongoose"


const messageSchema =new mongoose.Schema({
    senderld :{
        type: mongoose.Schema.Types. ObjectId,
        ref: "User",
        required: true,
    },
    receiverld: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" ,
        required: true,
    },
    text: {
        type: String,
    },
     image: {
        type: String,
    },
},
{ timestamps: true }
);

const Message= mongoose.model("message",messageSchema);

export default Message;