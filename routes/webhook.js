const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Webhook",
    message: "The app is Webhook!",
  });
});
router.post("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Webhook",
    message: "The app is Webhook!",
  });
});

module.exports = router;