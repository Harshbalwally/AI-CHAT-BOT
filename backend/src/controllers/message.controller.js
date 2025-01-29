import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUserForSidebar = async(req,res) => {
    try{
        const loggedInUserId=req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch(error){
      console.error("Error in getUserForSidebar",error.message);
      res.status(500).json({error:"Internal server error"});
    }
 };

 export const getMessages = async(req,res) => {
   try {
    const {id:userToChatId} = req.params
    const myld = req.user._id;

    const message = await Message.find({
        $or:[
            {senderld:myld, receiverld:userToChatId},
            {senderld:userToChatId, receiverld:myld}
        ]
    })

    res.status(200).json(message)
   } catch (error) {
    console. log( "Error in getMessages controller:",error.message);
        res. status(500).json ({error:"Internal server error"});
   } 
 };