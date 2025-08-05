import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blogs = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlog = async () => {
    const blog = blog_data.find((item) => item._id === id);
    console.log(blog);
    setSingleBlog(blog);
  };
  const fetchComments = async () => {
    setComments(comments_data);
  };
  const addComments = async (e) => {
    e.preventDefault();
    
  };
  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);
  return singleBlog ? (
    <div>
      <Navbar />
      <div className="text-center mt-20 text-gray-600">
        <p className="py-4 font-medium text-blue-600">
          {moment(singleBlog.createdAt).format("LLLL")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {singleBlog.title}
        </h1>
        <h2 className="my-5 max-w-lg mx-auto truncate">
          {singleBlog.subTitle}
        </h2>
        <p className="inline-flex  border rounded-full bg-blue-200 border-blue-800 px-3 my-3">
          Michael Brown
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={singleBlog.image} alt="" className="rounded-3xl mb-5" />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: singleBlog.description }}
        ></div>
        {/* comments section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative  border  border-gray-400 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* add comment section */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comments</p>
          <form
            onSubmit={addComments}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-0"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <textarea
              required
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              placeholder="Comments"
              value={content}
              onChange={(e)=>setContent(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-600 text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        {/* share button */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.googleplus_icon} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader/>
  );
};

export default Blogs;
