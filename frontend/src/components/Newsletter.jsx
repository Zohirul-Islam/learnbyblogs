import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center mx-8 sm:mx-16 xl:mx-32 mb-10">
      <h1 className="text-2xl sm:text-4xl font-medium mb-4">
        Never Miss a Blog!
      </h1>
      <p className="font-semibold mb-6 text-sm sm:text-[18px] text-gray-600">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form
        onClick={onSubmitHandler}
        className="w-full sm:w-1/2 mx-auto flex justify-between border border-gray-500 rounded-sm "
      >
        <input
          className="pl-5 outline-0 w-full"
          type="text"
          required
          placeholder="Enter your email id"
        />
        <button type="submit" className="bg-blue-800 px-7 py-2 text-white font-medium text-lg hover:bg-blue-600 ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
