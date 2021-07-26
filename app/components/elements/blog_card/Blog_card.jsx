const Blog_card = () => {
  return (
    <article className="bg-secondaryVeryLight text-secondaryDark px-3 py-4 rounded-lg">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold sm:text-xl">Blog Title</h4>
        <p className="text-dangerous">180 views</p>
      </div>
      <div className="flex items-center">
        <p>July 10, 2020</p>
        <span className="w-1 h-1 rounded-full bg-secondaryDark mx-1"></span>
        <p className="text-dangerous">4 min read</p>
      </div>
      <p className=" pt-2 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad libero
      </p>
    </article>
  );
};

export default Blog_card;
