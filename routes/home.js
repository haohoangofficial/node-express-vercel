const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});
router.get("/webhook", async (req, res, next) => {
  return res.status(200).json({
    title: "Webhook",
    message: "The app is Webhook!",
  });
});

module.exports = router;
