
const  {data}=require('../data');
// const database = require('../models/config');
const  products= require('../models/product.js');

exports.mycomparator =(req,res)=> {
console.log(data)
    res.render("taksone",{result:data.sort(fSort)})
};
const fSort = (a,b) =>
  {
  let order =  Number(a.harga) - Number(b.harga)           
  if (order===0) order = Number(b.rating) - Number(a.rating) 
  if (order===0) order = Number(b.likes) - Number(a.likes)
  return order
  }

  exports.mylistProduct =(async(req,res)=> {
    const listproducs=await products.findAll()
    // console.log(listproducs)
    // res.status(200).send(listproducs)
    res.status(200).render("tasktwo",{result:listproducs})
  })
 
  exports.saveProduct = (async (req, res) => {
    await products.create({
      title:req.body.title,
      product_price:req.body.product_price,
      product_description:req.body.product_description
    }).then(() => {
      res.redirect('/tasktwo');
    });
  });

  exports.updateproduct = (async (req, res) => {
    await products.update({
      title:req.body.title,
      product_price:req.body.product_price,
      product_description:req.body.product_description,
    },{where:{id:req.body.product_id}}).then(() => {
      res.redirect('/tasktwo');
    });
  });

  exports.deleteroduct = (async (req, res) => {
    await products.destroy({ where: { id: req.body.product_id2 } }).then(()=>{
      res.redirect('/tasktwo');
    })
  })
  
  exports.mycalculator=(req,res)=>{

    res.render("takstree",)
  }