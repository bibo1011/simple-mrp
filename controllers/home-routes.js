// Dependencies
const router = require('express').Router();
const { Part, Product, User } = require('../models');

// REST API HTTP requests
// router.get('/', (req, res) => {
//     Product.findAll({
//         include: [User]
//     }).then(data => {
//         const prodData = data.map(product => product.get({plain: true}))
//         res.render('products', {prodData})
//     }).catch(err => {
//         res.status(500).json(err)
//     })
// });


router.get('/products/:id', (req, res) => {
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

            res.render('single-product', {product})
        } else {
            res.status(404).end()
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});


router.get('/parts', (req, res) => {
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
            // const parts = dbPostData.map(part =>part.get({
            //     plain: true
            // }));
            const parts={
                parts:dbPartData
            }
            console.log(parts);
            res.render('parts', parts)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.post('/parts', (req, res) => {
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
        //  if(dbPartData.part._options.isNewRecord === false){
        //     res.send({message:"Duplicate Entry"});
        // }
        res.send({messgae: "success"});
    })
    .catch(err => {
        if(err){
            //console.log(err.parent.errno);
            console.log(err);
            res.send({message:"Duplicate Entry"});
        }
        
    });
});

router.put( '/parts', (req, res)=>{
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

router.delete('/parts', (req, res)=>{
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
router.get('/products', (req, res) => {
    Product.findAll({
        // raw:true,
        attributes: [
            'id',
            'product_name',
            'model',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['email']
            },
            {
                model: Part,
                attributes: ['part_number', 'part_name', 'description', 'quantity']
            }
        ]
    })
    .then(dbProductData =>{
        console.log (dbProductData);
        res.render('products',{products:dbProductData})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    res.render('login')
})


// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/')
//         return;
//     }
//     res.render('signup')
// })


// Command to export code
module.exports = router;