const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));


// Define template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',//specifies main.handlebars as the default layout
    runtimeOptions:{//Helps avoid runtime issues
        allowProtoProperties: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'handlebars');
const routes = require('./controllers/');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
