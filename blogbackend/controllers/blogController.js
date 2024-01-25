const Blog = require('../models/blog');

const getAllBlogs = async (req, res) => {
  try {
    const sortValue = req.query.sortValue || 1; 
    const search = req.query.searchValue || '';
    const searchRegex = new RegExp(search, 'i'); 
    const blogs = await Blog.find({ title: searchRegex }).select('-_id -__v')
      .sort({ createdAt: parseInt(sortValue) });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findOne({blogId}).select('-_id -__v');

    if (!blog) {
      res.status(404).json({ message: 'Cannot find any blog' });
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({ message: 'Blog added successfully' });
  } catch (error) {
    console.log("error is",error);
    res.status(500).json({ message: error.message });
  }
};


const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findOneAndUpdate({blogId}, req.body, { new: true });

    if (!blog) {
      res.status(404).json({ message: 'Cannot find any blog' });
    } else {
      res.status(200).json({ message: 'Blog updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findOneAndDelete({blogId});

    if (!blog) {
      res.status(404).json({ message: 'Cannot find any blog' });
    } else {
      res.status(200).json({ message: 'Blog deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogsByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    const search = req.query.searchValue || ''; // Default to empty string if not provided
    const searchRegex = new RegExp(search, 'i'); // Case-insensitive search regex

    const blogs = await Blog.find({ userId: userId, title: searchRegex }).select('-_id -__v')

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogsByUserId
};
