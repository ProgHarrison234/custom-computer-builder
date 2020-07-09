let db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Component.findAll({})
      .then(function(dbComponent) {
        console.table(dbComponent);
        res.json(dbComponent);
      });
  });

  // app.get("/:id", function(req, res) {
  //   db.Component.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbComponent) {
  //       res.json(dbComponent);
  //     });
  // });

  // The post route needs work. This is built for saving a created Component, but we need to post from the db.
  // app.post("/api/gaming", function(req, res) {
  //   console.log(req.body);
  //   db.Component.create({
  //     component: req.body.component,
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //     rating: req.body.rating
  //   })
  //     .then(function(dbComponent) {
  //       res.json(dbComponent);
  //     });
  // });

  // app.Component("/api/gaming", function(req, res) {
  //   console.log(req.body);
  //   db.Component.create({
  //       component: req.body.component,
  //       name: req.body.name,
  //       description: req.body.description,
  //       price: req.body.price,
  //       rating: req.body.rating
  //     })
  //     .then(function(dbComponent) {
  //       res.json(dbComponent);
  //     });
  // });

  // app.delete("/api/gaming/:id", function(req, res) {
  //   db.Component.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbComponent) {
  //       res.json(dbComponent);
  //     });
  // });

// I don't think we need this.  
//   app.put("/api/gaming", function(req, res) {
//     db.Component.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbComponent) {
//         res.json(dbComponent);
//       });
//   });
};
