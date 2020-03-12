import express from "express";
import userModel from "../../dataAccess/entityModels/user.model";

const router = express.Router();

router.get('/auth',(req,res)=>{
    res.send({type:'GET'});
});

router.post('/auth',(req,res)=>{
    userModel.create(req.body)
    .then(result => res.send(result))
    
    // res.send({
    //     type:'POST',
    //     name: req.body.name
    // });
});

router.get('/authors',(req,res)=>{
    res.send({type:'GET'});
});

router.post('/authors',(req,res)=>{
    res.send({type:'POST'});
});

router.put('/authors/:id',(req,res)=>{
    res.send({type:'PUT'});
});

router.delete('/authors',(req,res)=>{
    res.send({type:'DELETE'});
});

// module.exports = router;
export default router;