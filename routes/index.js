
/*
 * GET home page.
 */

var Message = require('../models/message.js');


exports.index = function(req, res){
    Message.find(function(err, messages) { 
        res.render('index', { title:'pinTree', messages:messages  });
    });
};

exports.show = function(req, res) {
    console.log(req.param.id); 
    Message.findOne({_id:req.params.id}, function(err, message) {
        res.render('message',{title:'pinTree::show', message:message});
    });
};

exports.post = function(req, res) {
    new Message({title:req.body.title,message:req.body.message}).save();
    res.redirect('back');
};
