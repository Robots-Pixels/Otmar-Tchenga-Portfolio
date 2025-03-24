import Message from "../models/messageModel.js";

export const newMessage = async(req, res) => {
    const {name, email, message} = req.body;
    try {
        const newMessage = new Message({name, email, message});
        await newMessage.save();
        res.status(200).json(
            {
                success: true,
                message: "Message sent successfully",
            }
        )
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong. Try again",
        })
    }
}