const router = require("express").Router();
const { Image, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.redirect("/profile")
});

router.get("/profile/:id", async (req, res) => {
  try {
    const imageData = await Image.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const project = imageData.get({ plain: true });

    res.render("login", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Image }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
