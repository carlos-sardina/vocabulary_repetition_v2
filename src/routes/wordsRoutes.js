import { Router } from "express";
import listActiveWords from "../controllers/words/listActiveWords";
import create from "../controllers/words/create";
import del from "../controllers/words/delete";
import moveToLearned from "../controllers/words/set_learned";
import update from "../controllers/words/update";
import updateTimesPlayed from "../controllers/words/update_counter";
import matchWords from "../controllers/words/match";
const router = Router();

router.get('/list/active', listActiveWords);
router.put('/setLearned/:id', moveToLearned);
router.post('/create', create);
router.delete('/delete/:id', del);
router.put('/update/:id', update);
// router.patch('/update/:id/counter', updateTimesPlayed);
router.get('/match/:word', matchWords);

export default router;