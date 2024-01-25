const express = require("express");
const blogController = require("../controllers/blogController");
const { validateToken } = require("../authUtils");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/blog",   blogController.getAllBlogs);
router.get("/blog/user/:userId",blogController.getBlogsByUserId);
router.get("/blog/:blogId",   blogController.getBlogById);
router.post("/blog",   blogController.addBlog);
router.put("/blog/:blogId",   blogController.updateBlog);
router.delete("/blog/:blogId",   blogController.deleteBlog);
router.get('/users',userController.getAllUsers);

module.exports = router;
