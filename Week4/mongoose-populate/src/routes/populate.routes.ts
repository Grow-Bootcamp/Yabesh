import { Router, type Request, type Response } from 'express';
import Author from '../models/Author.js';
import Post from '../models/Post.js';

const router = Router();

router.post("/authors", async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({
      message: 'Author created successfully',
      author,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create author",
      error,
    });
  }
});


router.post('/posts', async (req: Request, res: Response) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      message: 'Posts created successfully',
      post,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create a post",
      error,
    });
  }
});

router.get('/posts', async(_req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("author");

    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to retrieve posts",
      error,
    });
  }
});

router.get('/posts/:id', async (req: Request, res:Response) => {
  try {
    const post = await Post.findById(req.params.id).populate("author");
    // const post = await Post.findById(req.params.id).populate("author", "name email");
    
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to retrieve post",
      error,
    });
  }
}); 

export default router;