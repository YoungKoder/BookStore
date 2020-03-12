import express from "express";

const router = express.Router();

router.get('/auth',(req,res)=>{
    res.send({type:'GET'});
});

router.post('/auth',(req,res)=>{
    res.send({type:'POST'});
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