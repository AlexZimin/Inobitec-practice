import node from "../models/node.js";

class NodeController{
    async createNode(req, res){
        try {
            const {name, ip, port, parent_id} = req.body;
            const newNode = await node.create({name, ip, port, parent_id});
            res.json(newNode);
        } catch (error) {
            res.json(error)
        }
    }   
    async getNodes(req, res){
        try {
            const nodes = await node.findAll();
            res.json(nodes)
        } catch (error) {
            res.json(error)
        }
    }
    async getRootNode(req, res){
        try {
            const rootNode = await node.findOne({where: {parent_id: null}})
            res.json(rootNode)
        } catch (error) {
            res.json(error)
        }
    }
    async getNode(req, res){
        try {
            const id = req.params.id;
            const oneNode = await node.findOne({where: {id:id}})
            res.json(oneNode)
        } catch (error) {
            res.json(error)
        }
    }
    async getChildNode(req, res){
        try {
            const id = req.params.id;
            const oneNode = await node.findAll({where: {parent_id:id}})
            res.json(oneNode)
        } catch (error) {
            res.json(error)
        }
    }
    async updateNode(req, res){
        try {
            const {id, name, ip, port, parent_id} = req.body;
            const data = {name, ip, port, parent_id}
            await node.update(data, {where: {id}});
            await res.json(data);
        } catch (error) {
            res.json(error)
        }
    }
    async deleteNode(req, res){
        try {
            const id = req.params.id;
            await node.destroy({where: {id}});
            res.sendStatus(200);
        } catch (error) {
            res.json(error)
        }
    }
}

const nodeController = new NodeController();

export default nodeController;