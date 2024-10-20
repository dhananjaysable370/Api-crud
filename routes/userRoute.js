import express from 'express'
import { create, deleteUser, getAllUsers, update } from '../controllers/userController.js';
const router = express.Router();

router.post('/create', create);
router.get('/allusers', getAllUsers)
router.put('/update/:id', update);
router.delete('/delete/:id', deleteUser);
export default router;