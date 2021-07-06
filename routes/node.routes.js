import { Router } from "express";
import nodeController from "../controller/node.controller.js";
const router = new Router();
router.post('/node', nodeController.createNode);
router.get('/node', nodeController.getNodes);
router.get('/node/:id', nodeController.getNode);
router.put('/node', nodeController.updateNode);
router.delete('/node/:id', nodeController.deleteNode);

export default router;