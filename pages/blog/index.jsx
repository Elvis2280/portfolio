import axios from 'axios';
import { useState } from 'react';
import TitleAnimated from '../../app/components/elements/titleAnimated/TitleAnimated';
import Image from 'next/image';
import Link from 'next/link';
import { url } from '../../config/next.config';

export async function getStaticProps(context) {
  const { data: blog } = await axios.get(`${url}/blogs`);
  const { data: empty_searchPicture } = await axios.get(`${url}/empty-search`);

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
  const blog_card = blog.map((blog) => {
    //If the searchbar is not empty and have some similar text to the blog title render only that
    if (
      search.length !== 0 &&
      blog.title.toLowerCase().includes(search.toLowerCase())
    ) {
      //title.replace(/\s/g, '-')

      //TODO: I have to change this to one component because is same like home page blog
      return (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <a>
            <article className="border border-secondaryLight mt-3 px-3 py-2 rounded cursor-pointer">
              <h3 className="text-xl font-semibold sm:text-xl">{blog.title}</h3>
              <div className="flex items-center">
                <p>{blog.date}</p>{' '}
                <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-secondaryLight mx-1"></span>
                <p className="text-dangerous">{`${blog.time} min read`}</p>
              </div>
              <p className="pt-2 md:text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
                {blog.description}
              </p>
            </article>
          </a>
        </Link>
      );
      //only render all the elements if searchbar is empty
    } else if (search.length === 0) {
      return (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <a>
            <article className="border border-secondaryLight mt-3 px-3 py-2 rounded cursor-pointer">
              <h3 className="text-xl font-semibold sm:text-xl">{blog.title}</h3>
              <div className="flex items-center">
                <p>{blog.date}</p>{' '}
                <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-secondaryLight mx-1"></span>
                <p className="text-dangerous">{`${blog.time} min read`}</p>
              </div>
              <p className="pt-2 md:text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">
                {blog.description}
              </p>
            </article>
          </a>
        </Link>
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
            src={`${url}${empty_searchPicture.empty_search_pic.url}`}
            layout="fill"
            alt={empty_searchPicture.empty_search_pic.name}
            className="custom-img"
          />
          <p className="text-xl md:text-2xl text-center">{`Sad not result!`}</p>
        </div>
      ) : (
        blog_card.reverse()
      )}
    </section>
  );
};
//Choose the layaout 1 for this page
Blog.layout = 'L1';
export default Blog;
