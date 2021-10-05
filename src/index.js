const express = require('express');
const app = express();

let userList = [];

// #region GET

app.get('/', function(req,res){
	res.send("Hello World!");
});

app.get('/users', function(req, res){
	res.json(userList);
});

/*app.get('/user/:id', function(req,res){
	// userList.push(0);
	const user = userList.find(usr => usr.id == req.params.id);
	console.log(userList);
	res.json(user);
});*/

// #endregion GET

// #region POST

/*app.post('/user', function(req,res){
	userList.push({id: 0});

	res.json(userList);
})*/

// #endregion POST

app.listen(3000, function(){
	console.log("Server running");
});