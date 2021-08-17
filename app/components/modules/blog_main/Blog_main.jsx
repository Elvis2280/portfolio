import lastTreeItems from '@/app/utils/lastTreeItems';
import Blog_card from '@/app/components/elements/blog_card/Blog_card';
import Btn_linkPage from '@/app/components/elements/btn_linkPage/Btn_linkPage';

const Blog_main = ({ blogs }) => {
  return (
    <div className="z-20">
      <h3 className="text-2xl font-semibold pb-3 pt-10 sm:text-3xl lg:text-4xl">
        Featured <span className="text-secondaryVeryLight">Blogs</span>
      </h3>
      <section className="grid grid-cols-1 gap-y-3 ">
        {lastTreeItems(blogs).map((blog) => {
          return (
            <Blog_card
              key={blog.id}
              blog={blog}
              bgColor="bg-secondaryVeryLight"
              textColor="text-secondaryDark"
            />
          );
        })}

        <Btn_linkPage pageDirection="/blog">See More</Btn_linkPage>
      </section>
    </div>
  );
};

export default Blog_main;
