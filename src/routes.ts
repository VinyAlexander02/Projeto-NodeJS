import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController }  from './controllers/CreateTagController';

import { ensureAdmin } from './middewares/ensureAdmin';
import { esureAuthenticated } from './middewares/ensureAuthenticated'
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users",createUserController.handle);
router.post("/tags", esureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);




export { router };