import express from 'express';
import { info } from '../../controllers/index.js';
// import { signup } from '../../controllers/user-controller.js';
import { signup ,login} from '../../controllers/index.js';
const router = express.Router();

router.get('/info', info);
router.post('/signup', signup);
router.post('/login', login);
export default router;
