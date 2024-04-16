import Completed from "../models/completedModel.js";
 
export const getAllCompleted = async (req, res) => {
    try {
        const completeds = await Completed.findAll();
        res.json(completeds);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 export const getCompletedById = async (req, res) => {
    try {
        const completeds = await Completed.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(completeds[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createCompleted = async (req, res) => {
    try {
        await Completed.create(req.body);
        res.json({
            "message": "Completed Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateCompleted = async (req, res) => {
    try {
        await Completed.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Completed Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteCompleted = async (req, res) => {
    try {
        await Completed.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Completed Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

