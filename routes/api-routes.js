let db = require("../models");
// const Op = Sequelize.Op;

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), (req, res) => {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });



  app.get("/api/components/:category", function(req, res) {
    if (req.params.category === "gaming-pc") {
      db.Component.findAll({
      where: {
        gaming_pc: true
    }
    })
      .then(function(dbComponent) {
        console.table(dbComponent);
        res.json(dbComponent);
      });
    }
    else if (req.params.category === "workstation-pc") {
      db.Component.findAll({
      where: {
        workstation_pc: true
    }
    })
      .then(function(dbComponent) {
        console.table(dbComponent);
        res.json(dbComponent);
      });
    }
    else if (req.params.category === "ht-pc") {
      db.Component.findAll({
      where: {
        home_theater_pc: true
    }
    })
      .then(function(dbComponent) {
        console.table(dbComponent);
        res.json(dbComponent);
      });
    }
    
  });

  app.get("/api/description/:name", function(req, res) {
    db.Component.findAll({
      where: {
        description: req.params.name,
    }
    })
      .then(function(dbComponent) {
        console.table(dbComponent);
        res.json(dbComponent);
      });
  })

  app.post("/api/builds", function(req, res) {
    console.log(JSON.stringify(req.body))
    res.end();
    // db.Component.create({
    //   console.log(req)
    // })
  })
  // app.get("/api/components/workstation-pc", function(req, res) {
  //   db.Component.findAll({
  //     where: {
  //       category: true,
  //    }
  //   })
  //     .then(function(dbComponent) {
  //       console.table(dbComponent);
  //       res.json(dbComponent);
  //     });
  // });

  // app.get("/api/components/ht-pc", function(req, res) {
  //   db.Component.findAll({
  //     where: {
  //       home_theater_pc: true,
  //    }
  //   })
  //     .then(function(dbComponent) {
  //       console.table(dbComponent);
  //       res.json(dbComponent);
  //     });
  // });

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
