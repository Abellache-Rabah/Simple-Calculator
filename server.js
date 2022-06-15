const port = 3000;

var express = require('express'),
    app = express();

var bodyParser = require('body-parser');

/*app.use(express.static(__dirname + '/index.html'));*/

app.use(bodyParser.urlencoded({
   extended: true
}));

/*app.use(bodyParser.json());*/

app.get("/",function(req ,res){
	res.sendFile(__dirname + "/index.html");
});

app.post('/',function(req,res){
   var n1 = Number(req.body.num1);
   var n2 =  Number(req.body.num2);
   res.send("result is :" + (n1*n2));
   console.log(n1+n2);
});

app.listen(port,function(){
	console.log('3000');
});
