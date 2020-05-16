const { Router } = require('express')
const mongoose = require('mongoose')
const Model = require('../models/models')

const router = Router()

//const db = 'mongodb://localhost:27017/todolist'
const db = 'mongodb+srv://Urich:Fsada121weE@cluster0-fcuhc.mongodb.net/test?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        console.log('Failed to connected to ' + db)
    } else {
        console.log('Connected to ' + db)
    }
})

// CORS解决跨域问题
router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



// GET
router.get('/' , function(req, res){
  Model.find({} , (err, list) => {
    res.status(200).json(list);

  });
}).post('/', function(req, res){
    const model = new Model({
      content: req.body.content
    });
    model.save(err => {
      if (err) return res.status(400).send(err);
      res.status(201).send(model);
    });
}).put('/', function(req, res){
  let id = req.body.id;
  Model.updateOne({ _id: id }, { content: req.body.content }, (err,raw) => {
    if (err) return res.status(400).send(err);
    console.log(raw);
    res.status(200).send(raw);
  });

})/*.delete('/', function(req, res){
  //let id = req.params.id;
  console.log(req);
  Model.deleteOne({ _id: id }, err => {
    if (err) return res.status(400).send(err);
    res.status(200);
  });

});
*/
router.post('/delete/', function(req, res){
  let id = req.body.id;
  Model.deleteOne({ _id: id }, err => {
    if (err) return res.status(400).send(err);
    res.status(200).send("刪除成功");
  });

});
module.exports = router
