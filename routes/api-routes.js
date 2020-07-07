let db = require("../models/index");

module.exports = function(app) {

  app.get("/api/gaming", function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        console.table(dbProduct);
        res.json(dbProduct);
      });
  });

  // app.get("/api/gaming/:id", function(req, res) {
  //   db.Product.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbProduct) {
  //       res.json(dbProduct);
  //     });
  // });

  // The post route needs work. This is built for saving a created product, but we need to post from the db.
  // app.post("/api/gaming", function(req, res) {
  //   console.log(req.body);
  //   db.Product.create({
  //     component: req.body.component,
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //     rating: req.body.rating
  //   })
  //     .then(function(dbProduct) {
  //       res.json(dbProduct);
  //     });
  // });

  // app.Product("/api/gaming", function(req, res) {
  //   console.log(req.body);
  //   db.Product.create({
  //       component: req.body.component,
  //       name: req.body.name,
  //       description: req.body.description,
  //       price: req.body.price,
  //       rating: req.body.rating
  //     })
  //     .then(function(dbProduct) {
  //       res.json(dbProduct);
  //     });
  // });

  // app.delete("/api/gaming/:id", function(req, res) {
  //   db.Product.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbProduct) {
  //       res.json(dbProduct);
  //     });
  // });

// I don't think we need this.  
//   app.put("/api/gaming", function(req, res) {
//     db.Product.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbProducts) {
//         res.json(dbProducts);
//       });
//   });
};
