import pool from "../db_config.js";

class NodeController{
    async createNode(req, res){
        const {name, IP, port, parent_id} = req.body;
        const newNode = await pool.query(
            'INSERT INTO node (name, IP, port, parent_id) VALUES ($1,$2,$3,$4) RETURNING *', 
            [name, IP, port, parent_id]);
        res.json(newNode.rows[0]);
    }   
    async getNodes(req, res){
        const nodes = await pool.query('SELECT * FROM node')
        res.json(nodes.rows)
    }
    async getNode(req, res){
        const id = req.params.id;
        const node = await pool.query('SELECT * FROM node WHERE id = $1',[id]);
        res.json(node.rows[0])
    }
    async updateNode(req, res){
        const {id, name, IP, port, parent_id} = req.body;
        const node = await pool.query(
            'UPDATE node set name = $2, IP = $3, port = $4, parent_id = $5 WHERE id = $1 RETURNING *',
            [id, name, IP, port, parent_id]);
        res.json(node.rows[0])
    }
    async deleteNode(req, res){
        const id = req.params.id;
        const node = await pool.query('DELETE FROM node WHERE id = $1',[id]);
        res.json(node.rows[0])
    }
}

const nodeController = new NodeController();

export default nodeController;