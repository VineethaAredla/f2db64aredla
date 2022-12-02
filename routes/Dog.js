var express = require('express');
const dog_controlers = require('../controllers/dog');
var router = express.Router();
const secured = (req, res, next) => { 
   if (req.user){ 
     return next(); 
   } 
   req.session.returnTo = req.originalUrl; 
   res.redirect("/login"); 
 } 


/* GET dog */
router.get('/', dog_controlers.dog_view_all_Page );
/* GET detail Dog page */
router.get('/detail', dog_controlers.dog_view_one_Page);
/* GET create dog page */
router.get('/create', secured, dog_controlers.dog_create_Page);
/* GET create update page */
router.get('/update',secured, dog_controlers.dog_update_Page);
/* GET delete dog page */
router.get('/delete',secured, dog_controlers.dog_delete_Page);

module.exports = router;
