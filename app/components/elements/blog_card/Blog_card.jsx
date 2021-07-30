import Link from 'next/link';
const Blog_card = ({ blogs }) => {
  const cards = blogs
    .slice(blogs.length - 3, blogs.length)
    .reverse()
    .map((blog) => {
      return (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <a>
            <article className="bg-secondaryVeryLight text-secondaryDark px-3 py-4 rounded-lg cursor-pointer">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold sm:text-xl">
                  {blog.title}
                </h4>
              </div>
              <div className="flex items-center">
                <p>{blog.date}</p>
                <span className="w-1 h-1 rounded-full bg-secondaryDark mx-1 md:w-2 md:h-2"></span>
                <p className="text-dangerous">{`${blog.time} min read`}</p>
              </div>
              <p className=" pt-2 md:text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
                {blog.description}
              </p>
            </article>
          </a>
        </Link>
      );
    });
  return cards;
};

export default Blog_card;
