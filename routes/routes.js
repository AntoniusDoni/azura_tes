var controller = require('../controller/main')

module.exports = function(app) {
    app.get("/", controller.mycomparator);
    app.get("/tasktwo", controller.mylistProduct);
    app.post("/addproduct",controller.saveProduct)
    app.post("/updateproduct",controller.updateproduct)
    app.post("/deleteproduct",controller.deleteroduct)

    app.get("/tasktree", controller.mycalculator);
}