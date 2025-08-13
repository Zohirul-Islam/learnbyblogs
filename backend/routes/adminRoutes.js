import express from 'express'
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middlewares/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin); // api call done from frontend login.js
adminRouter.get('/comments',auth,getAllComments);
adminRouter.get('/blogs',auth,getAllBlogsAdmin);
adminRouter.post('/delete-comment',auth,deleteCommentById);
adminRouter.post('/approved-comment',auth,approvedCommentById);
adminRouter.get('/dashboard',auth,getDashboard);

export default adminRouter