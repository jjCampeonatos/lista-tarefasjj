import { db } from "../db.js";
import { Router } from "express";

const rout_user = Router();

rout_user.post("/user", (req, res) => {
    const {nome, email, fone, data_nascimento}= req.body;
    
    db.query(`insert into usuarios (nome, email, fone, data_nascimento) values ('${nome}', '${email}','${fone}','${data_nascimento}')`,(err, result)=>{
        if(err){
            res.json("Erro ao inserir user: "+err.message)
        }

        res.json(`Usuário ${nome} inserido com sucesso!`)
    });
})


rout_user.get("/lista", (req, res) =>
{
    db.query(`select * from usuarios`, (err, result) => {
        if(err){
            return res.json("erro ao listar"+err.message)
        }

        res.json(result);
    })
})
    

export { rout_user }