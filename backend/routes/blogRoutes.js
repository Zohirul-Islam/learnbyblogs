import express from 'express'
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlog, getBlogById, getblogComment, togglePublish } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();
//api/blog/
blogRouter.post('/add',upload.single('image'),addBlog);
blogRouter.get('/all',getAllBlog);
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById)
blogRouter.post('/toggle-publish',togglePublish);
blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getblogComment);
blogRouter.post('/generate',generateContent)


export default blogRouter