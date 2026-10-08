import { Router } from 'express';
import { 
  homePage, 
  createUser, 
  getUsers, 
  getUserById, 
  updateUser,
  deleteUser
} from '../controllers/user.controller.js';

const router = Router();

router.get('/', homePage);

router.post('/users', createUser);

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;