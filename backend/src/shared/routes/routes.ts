// import express, { response } from "express";
// import userModel from "../../dataAccess/entityModels/user.model";
// // import {getHashPassword} from "../../utils/hashingPassword.util";
// import bcrypt from "bcrypt";


// const router = express.Router();

// router.get('/auth',(req,res)=>{
//     res.send({type:'GET'});
// });

// router.post('/auth',(req,res)=>{
//     console.log(req.body.password_hash);
//     const crypt = getHashPassword(req.body, req.body.password_hash) 
//     .then(response => userModel.create(response)
//     .then(result => res.send(result)));
// });

// router.get('/authors',(req,res)=>{
//     res.send({type:'GET'});
// });

// router.post('/authors',(req,res)=>{
//     res.send({type:'POST'});
// });

// router.put('/authors/:id',(req,res)=>{
//     res.send({type:'PUT'});
// });

// router.delete('/authors',(req,res)=>{
//     res.send({type:'DELETE'});
// });

// // module.exports = router;
// export default router;