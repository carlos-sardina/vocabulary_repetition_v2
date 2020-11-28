import { Router } from "express";
import getConfig from "../controllers/config/get";
import updateConfig from "../controllers/config/update";
import install from "../controllers/config/install";
import timesPlayed from "../controllers/config/timesPlayed";
const router = Router();

router.get('/', getConfig);
router.get('/install', install);
router.post('/update/:id', updateConfig);
router.get('/times_played', timesPlayed);

export default router;