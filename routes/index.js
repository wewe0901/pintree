
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
        var today = new Date();
        console.log("show view : "+ message);
        if(message.publicDate !=null && message.publicDate > today)
            res.render('futureMessage',{title:'pinTree',message:message});
        else
            res.render('message',{title:'pinTree', message:message});
    });
};

exports.post = function(req, res) {
    var data =req.body.publicDate.split('/');
    var month = parseInt(data[0],10) - 1; // javascript date use 0~11 to present month
    var day = parseInt(data[1],10);
    var year = parseInt(data[2],10);
    console.log('post data :'+req.body.publicDate + ' -> '+year+'-'+month+'-'+day);
    console.log(' new Date :' + new Date(year,month,day));
    new Message({title:req.body.title,message:req.body.message,publicDate: new Date(year, month, day)}).save();
    res.redirect('back');
};
