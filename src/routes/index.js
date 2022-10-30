const { Router } = require("express");

const router = Router();

router.get("/login", (_, res) => {
  return res.send("hello");
});

module.exports = router;
