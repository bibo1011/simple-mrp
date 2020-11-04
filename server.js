const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

//const sequelize = require("./config/connection");
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

//app.use(session(sess));

//const helpers = require('./utils/helpers');

//const hbs = exphbs.create({ helpers });
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// ================================================================================

const parts = [
  {
      part_number: '2020-001',
      part_name: 'chasis',
      description: 'base frame',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-002',
      part_name: 'body',
      description: 'outer covering',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-003',
      part_name: 'engine',
      description: 'motor',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-004',
      part_name: 'wheel',
      description: 'rims and tires',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-005',
      part_name: 'door',
      description: 'hinged',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-006',
      part_name: 'window',
      description: 'tampered glass',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-002',
      part_name: 'body',
      description: 'outer covering',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-003',
      part_name: 'engine',
      description: 'motor',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-004',
      part_name: 'wheel',
      description: 'rims and tires',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-005',
      part_name: 'door',
      description: 'hinged',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-006',
      part_name: 'window',
      description: 'tampered glass',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-002',
      part_name: 'body',
      description: 'outer covering',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-003',
      part_name: 'engine',
      description: 'motor',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-004',
      part_name: 'wheel',
      description: 'rims and tires',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-005',
      part_name: 'door',
      description: 'hinged',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-006',
      part_name: 'window',
      description: 'tampered glass',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-002',
      part_name: 'body',
      description: 'outer covering',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-003',
      part_name: 'engine',
      description: 'motor',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-004',
      part_name: 'wheel',
      description: 'rims and tires',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-005',
      part_name: 'door',
      description: 'hinged',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-006',
      part_name: 'window',
      description: 'tampered glass',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-002',
      part_name: 'body',
      description: 'outer covering',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-003',
      part_name: 'engine',
      description: 'motor',
      quantity: 1,
      product_id: 1
  },
  {
      part_number: '2020-004',
      part_name: 'wheel',
      description: 'rims and tires',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-005',
      part_name: 'door',
      description: 'hinged',
      quantity: 4,
      product_id: 1
  },
  {
      part_number: '2020-006',
      part_name: 'window',
      description: 'tampered glass',
      quantity: 4,
      product_id: 1
  }
]

// ================================================================================
const productData = [
    {
        product_name: 'Toyota',
        model: '4runner',
        user_id: 1
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 2
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        user_id: 3
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        user_id: 1
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 3
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 2
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        user_id: 3
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        user_id: 1
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 3
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 2
    },
    {
        product_name: 'Honda',
        model: 'S2000',
        user_id: 3
    },
    {
        product_name: 'Ford',
        model: 'Mustang',
        user_id: 1
    },
    {
        product_name: 'Jeep',
        model: 'Wrangler',
        user_id: 2
    },
    {
        product_name: 'Chrysler',
        model: 'Corvette',
        user_id: 3
    }
]
//=================================================================================

app.get('/parts', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    parts: parts
  };
  // console.log(data);
  res.render('parts', data);
});

//products
app.get('/products', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  // console.log(data);
  const prodData = {
    products: productData
  };
  res.render('products', prodData);
});

//overview
app.get('/overview', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  // console.log(data);
  res.render('overview');
});

//User
app.get('/account', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  // console.log(data);
  res.render('account');
});


//=================================================================================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
app.listen(PORT, () => {//Listen with express server rather than sequelize option above
  console.log('App listening on PORT ' + PORT);
});
