const router = require('express').Router();
const { Comments, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Comments and JOIN with user data
    const commentsData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const Comments = commentsData.map((comments) => comments.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      comments, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});