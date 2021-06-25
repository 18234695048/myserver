var express = require("express");
var app = express();
var art = require("express-art-template")
app.engine("html", art)
app.use(express.static("public"));
app.listen(8080,function(){
    console.log("服务器已启动,访问8080端口");
});
app.use(function(req,res,next){
    const ip = req.ip.split('ffff:')[1]
    const path = req.path
    console.log(ip+' 访问了'+path);
    next()
})
app.get('/tianmao.html',function(req,res){
    res.render('tianmao.html')
})
app.get('/',function(req,res){
    res.render('index.html')
})
