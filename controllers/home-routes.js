// Dependencies
const router = require('express').Router();
const { Part, Product, User } = require('../models');
const { findAll } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/products/:id', withAuth, (req, res) => {
    Product.findByPk(req.params.id, {
       include: [
           User,
           {
               model: Part,
               include: [User]
           }
       ] 
    }).then(data => {
        if (data === true) {
            const product = data.get({
                plain: true
            })

            res.render('single-product', {product,
                loggedIn: req.session.loggedIn})
        } else {
            res.status(404).end()
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});


router.get('/parts', withAuth, (req, res) => {
    Part.findAll({
       attributes: [
        'part_number',
        'part_name',
        'description',
        'quantity' 
       ] ,
       order:[
           ['part_number', 'ASC']
        ]
       
    })
    .then(dbPartData => {
            const parts = dbPartData.map(part =>part.get({
                plain: true
            }));
            console.log(parts);
            res.render('parts', {parts,
                loggedIn: req.session.loggedIn})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.post('/parts', withAuth, (req, res) => {
    Part.create({
      part_number: req.body.part_number,
      part_name: req.body.part_name,
      description: req.body.description,
      quantity: req.body.quantity
    })
    .then(dbPartData =>{
        console.log ("======================================================================");
        console.log(dbPartData)
        console.log ("======================================================================");
        res.send({messgae: "success"});
    })
    .catch(err => {
        if(err){
            console.log(err);
            res.send({message:"Duplicate Entry"});
        }
        
    });
});

router.put('/parts', withAuth, (req, res)=>{
    console.log(req.body);
    Part.update(
        {
            description: req.body.description,
            quantity: req.body.quantity
        },
        {
            where:{
                part_number:req.body.part_number
            }
        }
    )
    .then(dbPostData =>{
        console.log(dbPostData);
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.delete('/parts', withAuth, (req, res)=>{
    Part.destroy({
        where:{
            part_number:req.body.part_number
        }
    }
    )
    .then(dbPostData =>{
        console.log(dbPostData);
        res.json(dbPostData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err)
    });
});

//========================================================
//Product routes
//========================================================
router.get('/products', withAuth, (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'product_name',
            'model',
            'created_at'
        ],
        
        include: [
            {
                model: User,
                attributes: ['id','email']
            },
            {
                model: Part,
                attributes: ['part_number', 'part_name', 'description', 'quantity']
            }
        ]
    })
        .then(dbProductData => {
            Part.findAll({
                attributes: [
                    "part_number",
                    "part_name",
                    "quantity"
            ]
            })
                .then(dbPartData => {
                    console.log(dbProductData);
                    res.render('products', {
                        products: dbProductData,
                        parts:dbPartData,
                        loggedIn: req.session.loggedIn
                    })
            })
        
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/overview" ,withAuth, (req, res) => {
    res.render("overview", {loggedIn: req.session.loggedIn})
})

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('login')
})


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('signup')
})
router.get('/account', withAuth, (req, res) => {
    User.findOne({
        where: {
            email: req.session.email
        },
        attributes: [
            'id',
            'email', 
            'password'
        ]
     })
    .then(dbUserData => {
        console.log(dbUserData)
        const user = dbUserData.get({ plain: true });
        res.render('account', {user,
            loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/users', (req, res) => {
    console.log(req.body);
    User.update (
        {
            password: req.body.password
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then(dbUserData =>{
            console.log(dbUserData);
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
})


// Command to export code
module.exports = router;