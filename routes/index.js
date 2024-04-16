import express from "express";
 
import { 
    getAllCompleted,
    createCompleted,
    getCompletedById,
    updateCompleted,
    deleteCompleted
} from "../controllers/Completed.js";
 
const router = express.Router();
 
router.get('/', getAllCompleted);
router.get('/:id', getCompletedById);
router.post('/', createCompleted);
router.patch('/:id', updateCompleted);
router.delete('/:id', deleteCompleted);
 
export default router;

