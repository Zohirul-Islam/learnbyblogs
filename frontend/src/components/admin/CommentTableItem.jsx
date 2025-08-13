import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
    console.log(comment)
  const { axios } = useAppContext();
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);
  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approved-comment", {
        id: _id,
      });
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
    const deleteComment = async () => {
    try {
        const confirm = window.confirm('Are you sure to delete comments');
        if(!confirm)return
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-gray-300 order-y">
      <td className="px-6 py-3">
        <b className="font-medium text-gray-600">Blog</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>
      <td className="px-6 py-3 max-sm:hidden">
        {blogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-3">
        <div className="inline-flex items-center gap-4">
          {!comment.isApporved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              alt=""
              className="w-5 hover:scale-105 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            src={assets.bin_icon}
            alt=""
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
