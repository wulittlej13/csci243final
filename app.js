const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const sequelize = require('./public/utils/sequelize');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const session = require('express-session');
const FileSTore = require('session-file-store')(session);
const path = require('path');
const port = 8000;
const Router = require('./routes/index');
const indexRouter = require('./routes/index');

app.use('/', express.static('public'));
app.use('/', indexRouter);


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.set('Content-Type', 'text/html','Content-Type', 'text/css');
app.use(cookieparser())
app.use(express.urlencoded({extended:false}));
app.use(session({
		store: new FileSTore(),
		secret: "locals_only",
		resave: false,
		saveUninitialized: false
}));


io.on('connection', (socket) => {
	console.log("connected");

	socket.on('message', (data) => {
		console.log(data.message);
		let message = data.message;
		let user = data.username;
		console.log(user)
		//socket.emit('chat', { message, username: user});
		io.emit('chat', { message, username: user });
	})

	socket.on('setUser', (data) => {
		let username = data.username;
		let pass
		//console.log(username)

		socket.emit('UserSetting', { username: username });
	})
})

sequelize.authenticate()
	.then(() => {
		console.log("succesfully autenticiated");
		app.listen(port);

		sequelize.sync()
			.then(() => {
				console.log("succesfully synched");
			})
			.catch((err) => {
				console.log("unable to sync:", err);
			});
	})
	.catch((err) => {
		console.log("failed to authenticat", err);
	});
	
http.listen(port);