const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport');
const { Server } = require('socket.io')
const http = require('http');
const { exec } = require('child_process');


//Inicializaciones.........................
const app = express();
require('./lib/passport');

// Todo, websockets https://www.youtube.com/watch?v=zWax5QCWCXM&ab_channel=FaztCode
const server = http.createServer(app); // io
const io = new Server(server); // io

// * sockets
io.on('connection', (socket) => {
  console.log('nueva conexion', socket.id);
  // servidor espera evento que envie el cliente llamado 'client:newnote'
  socket.on('client:newnote', (newNote) => {
    // console.log('El cliente emite esta mondá', newNote);
  });

  socket.on('end', () => {
    console.log('Sesion cerrada', socket.id);
  });

  app.socket = socket;
});

app.io = io;

//Settings.................................
app.set('port', process.env.PORT || 8010);

/* -------------------------- Handlebars */
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');

//Middlewares..............................
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'mysqlnodesession',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Variables Globales......................
app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  app.locals.user = req.user;
  next();
})

global.array = []
global.bdd_name = "dbp_creacionusuarios"

//Routes..................................
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use(require('./routes/crud'));
app.use(require('./routes/tuya/routProcesos'));
app.use(require('./routes/tuya/routInicioBot'))
app.use(require('./routes/tuya/routGeneral'));


//Public..................................
app.use(express.static(path.join(__dirname, 'public')));

//Starting server.........................
app.listen(app.get('port'), () => {
  console.log('►--<-<-< ◄◄◄ Welcome ►►► >->->--◄');
  console.log('-<-<-< ◄◄◄ Server running on port', app.get('port'), '►►► >->->-');
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

//inicializacion .py
const pythonScript = '/1tb/NodeJS/COS_RPA_CRMSUCCESFACTOR/src/python/inicioSesion.py';
exec(`python3 ${pythonScript}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el archivo Python: ${error}`);
    return;
  }
  // console.log(`Salida del archivo Python: ${stdout}`);
});

