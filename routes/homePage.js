const express = require("express");
const { path } = require("express/lib/application");
const { send } = require("express/lib/response");
const router = express.Router();
const Backend = require("../model/function");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
  });
});

router.get("/regstration", (req, res) => {
  res.render("regstration", {
    title: "regstration page",
  });
}); 


router.get("/api/sign_in_password/sort", (req, res) => {
  let find = Backend.findByTelephone(req.query.telephone).catch((err) =>
    console.log(err)
  );
  res.render("sign_in", {
    title: "Authorize",
    find,
  });
});

router.get("/api/sign_in_password", (req, res) => {
  console.log(req.query.password);
  let find = Backend.findByTelephone(req.query.password).catch((err) =>
    console.log(err)
  );
  if (!!find) {
    res.send("ahmoq parol noto'gri");
  } else {
    res.render("index", {
      title: "Authorize",
      find,
    });
  }
});

router.get("/data/users", async (req, res) => {
  res.send(await Backend.getAllUsers())
});

module.exports = router;
