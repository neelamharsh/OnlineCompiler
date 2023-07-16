const express = require('express');

const router = express.Router();
const compiler = require('compilex');
const {c, cpp, node, python, java} = require('compile-run');

router.post('/compile', async (req,res) => {
  try{
    var code = req.body.val;
    var language = req.body.language;
    console.log(code)
    let resultPromise = python.runSource(code);
    resultPromise
        .then(result => {
            console.log(result);
            return res.status(200).json({resp:result});
        })
        .catch(err => {
            console.log(err);
            return res.status(200).json({resp:err});
        });
      }catch(err){
        return res.status(200).json({resp:err});
      }
});

''
module.exports = router;
