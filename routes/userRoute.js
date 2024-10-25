import express from 'express'
import { create, deleteUser, getAllUsers, getOne, update } from '../controllers/userController.js';
const router = express.Router();

router.post('/create', create);
router.get('/allusers', getAllUsers)
router.put('/update/:id', update);
router.delete('/delete/:id', deleteUser);
router.get('/oneuser/:id', getOne)
export default router;