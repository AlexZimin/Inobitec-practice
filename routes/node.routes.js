import { Router } from "express";
import nodeController from "../controller/node.controller.js";
const router = new Router();

router.post('/nodes', nodeController.createNode);
router.get('/nodes', nodeController.getNodes);
router.get('/nodes/root', nodeController.getRootNode);
router.get('/nodes/:id', nodeController.getNode);
router.get('/nodes/:id/children', nodeController.getChildNode);
router.put('/nodes/:id', nodeController.updateNode);
router.delete('/nodes/:id', nodeController.deleteNode);

export default router;

// router.post('/nodes', nodeController.createNode);
// router.get('/nodes', nodeController.getNodes);
// //ToDo
// //router.get('/nodes/root', nodeController.getNodes);
// router.get('/nodes/:id', nodeController.getNode);
// router.get('/nodes/:id/children', nodeController.getChildNode);
// router.put('/nodes/:id', nodeController.updateNode);
// router.delete('/nodes/:id', nodeController.deleteNode);