const Post = require('../models/postSchema')
const User = require('../models/userSchema')
const ctrlPost = {
    create: async (req, res) => {
        try {
            const newPost = new Post({
                content: req.body.content || '',
                image: req.file
                    ? {
                        url: req.file.path,
                        public_id: req.file.filename,
                    } : {
                        url: '',
                        public_id: '',
                    },
                author: req.user.id,
            });
            await newPost.save();
            await User.findByIdAndUpdate(req.user.id, { $push: { posts: newPost._id } });
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },    
    getAll: async (req, res) => {
        try {
          const posts = await Post.find()
            .populate("author") 
            .sort({ createdAt: -1 });
          res.status(200).json(posts);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
}

module.exports = ctrlPost;