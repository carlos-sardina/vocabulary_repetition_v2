import { Router } from "express";
import getConfig from "../controllers/config/get";
import updateTimesToRepeat from "../controllers/config/updateTimesToRepeat";
import install from "../controllers/config/install";
const router = Router();

router.get('/load/:language', getConfig);
router.get('/install', install);
router.post('/update/:id', updateTimesToRepeat);

export default router;