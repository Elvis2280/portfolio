import axios from 'axios';
import { useState } from 'react';
import TitleAnimated from '../../app/components/elements/titleAnimated/TitleAnimated';
import Image from 'next/image';
import Blog_card from '../../app/components/elements/blog_card/Blog_card';

export async function getStaticProps(context) {
  const { data: blog } = await axios.get(`${process.env.BACKEND_URL}/blogs`);
  const { data: empty_searchPicture } = await axios.get(
    `${process.env.BACKEND_URL}/empty-search`,
  );

  return {
    props: {
      blog,
      empty_searchPicture,
    },
  };
}

const Blog = ({ blog, empty_searchPicture }) => {
  const [search, setSearch] = useState('');
  const searchBlog = (e) => {
    //Insert the text from the searchbar to the State
    e.preventDefault();
    setSearch(e.target.value);
  };
  const blog_card = blog.reverse().map((blogItem) => {
    //If the searchbar is not empty and have some similar text to the blog title render only that
    if (
      search.length !== 0 &&
      blogItem.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return (
        <Blog_card
          key={blog.id}
          blog={blogItem}
          bgColor="bg-transparent"
          textColor="text-neutral"
          extraStyle="border border-secondaryLight"
        />
      );
      //only render all the elements if searchbar is empty
    } else if (search.length === 0) {
      return (
        <Blog_card
          key={blog.id}
          blog={blogItem}
          bgColor="bg-transparent"
          textColor="text-neutral"
          extraStyle="border border-secondaryLight"
        />
      );
    }
  });

  return (
    <section className="layout-component text-neutral pb-4">
      <TitleAnimated
        text={[`Elvis Miranda's <span>Blog</span> 👾`]}
        textSize="text-3xl sm:text-5xl lg:text-6xl"
      />

      <p className="pt-1 text-neutralGray font-semibold">
        My personal experiences and tips, I hope you can find something helpful.
      </p>

      <form className="pt-3 pb-2">
        <label className="text-secondaryLight font-semibold text-lg">
          Search
        </label>{' '}
        <br />
        <input
          type="text"
          className=" bg-transparent border-secondaryLight border rounded w-full h-8 px-2 md:h-10 text-lg text-secondaryVeryLight"
          placeholder="Type to search..."
          onChange={(e) => searchBlog(e)}
          value={search}
        />
      </form>
      {/* if all the items are undefined because searchText then return empty message otherwise if its not empty show the blog card */}
      {blog_card.every((element) => element === undefined) ? (
        <div className="relative unset-img py-3 lg:w-3/4 lg:mx-auto">
          <Image
            src={`${empty_searchPicture.empty_search_pic.url}`}
            layout="fill"
            alt={empty_searchPicture.empty_search_pic.name}
            className="custom-img"
          />
          <p className="text-xl md:text-2xl text-center">{`Sad not result!`}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-3 mt-2">{blog_card}</div>
      )}
    </section>
  );
};
//Choose the layaout 1 for this page
Blog.layout = 'L1';
export default Blog;
