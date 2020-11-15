const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3002;


const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Sets up the Express App
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',//specifies main.handlebars as the default layout
  runtimeOptions: {//Helps avoid runtime issues
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
    // query: {raw: true}  
  }
}
));
app.set('view engine', 'handlebars');
// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: 'This is a major secret!',
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize
    })
  })
);

// turn on routes
app.use(require('./controllers/'));


// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
