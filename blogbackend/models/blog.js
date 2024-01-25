const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), 
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  
  content: {
    type: String,
    required: true,
  },

  coverImage: {
    type: String,
    required: true,
  },

  tags: [{
    type: String,
  }],


  dateOfPublished: {
    type: Date,
    required: true,
  },
  
  category: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  }

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;