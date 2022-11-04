var express = require('express');
var router = express.Router();

class Dog {
constructor(dog_Name, age, price){
  this.dog_Name=dog_Name;
  this.age=age;
  this.price=price;
  
}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let D1=new Dog('Alaskan Malamute',5,12000);
  let D2=new Dog('Akita',9,10000);
  let D3=new Dog('American Leopard Hound',12,13000);

  res.render('Dog', { title: 'Search Results Dog',Dog : [D1,D2,D3] });
});


module.exports = router;