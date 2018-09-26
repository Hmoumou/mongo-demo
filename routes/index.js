var express = require('express');
var router = express.Router();
var googleModel = require("../model/class")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//数据库插入
router.post("/class",(req,res)=>{
  let {name,age , desc} = req.body
  googleModel.create({name, age , desc}).then(data=>{
    // console.log(desc)
    res.json({
      code:200,
      data,
    })
  })
})

//数据库的删除
router.delete('/class/:id',(req,res)=>{
  let {id} = req.params
  googleModel.deleteOne({_id:id}).then(desc=>{
    console.log(desc);
    res.json({
      code:200,
      desc
    })
  })
})

router.get("/class/:id",(req,res)=>{
  let {id} = req.params
  googleModel.findById(id).then(doc=>{
    res.json({
      code:200,
      data:doc,
    })
  })
})

//数据库的修改
router.put("/class/:id",(req,res)=>{
  let {desc} = req.body
  let {id} = req.params
  googleModel.updateOne({_id:id},{$set:{desc}}).then(doc=>{
    console.log(doc);
    res.json({
      code:200,
      doc,

    })
  })
})



//数据库查询
router.get('/class',(req,res)=>{
  let {pn=1, size=5} = req.query
  pn = parseInt(pn)
  size = parseInt(size)
  googleModel.find().limit(size).skip((pn-1)*size).then(data=>{
    console.log(data);
    res.json({
      code:200,
      data
    })
  })
})
module.exports = router;
