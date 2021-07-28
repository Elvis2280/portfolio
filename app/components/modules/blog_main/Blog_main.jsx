import Blog_card from '../../elements/blog_card/Blog_card';
import Btn_linkPage from '../../elements/btn_linkPage/Btn_linkPage';

const Blog_main = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
      <h3 className="text-2xl font-semibold pb-3 pt-10 sm:text-3xl lg:text-4xl">
        Featured <span className="text-secondaryVeryLight">Blogs</span>
      </h3>
      <section className="grid grid-cols-1 gap-y-3">
        <Blog_card blogs={blogs} />

        <Btn_linkPage pageDirection="/blog">See More</Btn_linkPage>
      </section>
    </div>
  );
};

export default Blog_main;
